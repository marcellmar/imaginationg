#!/usr/bin/env python3
"""
GPI Studio public voice preflight.

Scans visible page copy and copy-like string literals against the active
brain.db style rules. This is intentionally stricter than a linter and narrower
than a compiler: it checks the public language, not JSX plumbing.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sqlite3
import sys
from dataclasses import dataclass
from pathlib import Path


SITE_ROOT = Path(__file__).resolve().parent.parent
PROJECTS_ROOT = SITE_ROOT.parent
BRAIN_DB = PROJECTS_ROOT / "marcus-gpi-brain" / "brain.db"
RULESET_VERSION = "v1.0.0"

DEFAULT_TARGETS = [
    "pages/index.tsx",
    "pages/about.tsx",
    "pages/gpi-framework.tsx",
    "pages/work.tsx",
    "pages/insights/index.tsx",
]

SKIP_STRING_PREFIXES = ("/", "#", "mailto:", "http://", "https://")
SKIP_EXACT = {
    "home",
    "about",
    "framework",
    "work",
    "text",
    "json",
}

EXTRA_HARD_RULES = [
    (r"\b[Rr]ooms?\b", "forbidden: room/rooms", 2),
    (r"\b[Tt]hat\b", "forbidden: that", 2),
    (r"\bmatters?\b", "forbidden: matter/matters", 2),
    (r"\bshould\b", "forbidden: should", 2),
    (r"\bdoes not\b", "forbidden: does not", 2),
    (r"\bdid not\b", "forbidden: did not", 2),
    (r"\bcannot\b", "forbidden: cannot", 2),
    (r"\bis not\b", "forbidden: is not", 2),
    (r"\bare not\b", "forbidden: are not", 2),
    (r"\bnot just\b", "forbidden: not just", 2),
    (r"\breal read\b", "forbidden: real read", 2),
    (r"\bThe point\b", "forbidden: The point", 2),
    (r"\bThis means\b", "forbidden: This means", 2),
    (r"\bHere'?s\b", "forbidden: Here's", 2),
    (r"(^|[\n.]\s+)(Why|How|What)\s+", "forbidden heading/opening: Why/How/What", 2),
]


@dataclass(frozen=True)
class Rule:
    pattern: str
    label: str
    weight: int


@dataclass(frozen=True)
class Chunk:
    path: Path
    line: int
    text: str


def load_rules() -> list[Rule]:
    rules: list[Rule] = []
    try:
        conn = sqlite3.connect(str(BRAIN_DB), timeout=2)
        rows = conn.execute(
            """
            SELECT pattern, label, weight
            FROM style_gate_rules
            WHERE ruleset_version = ?
              AND enabled = 1
              AND rule_type = 'pattern'
              AND pattern IS NOT NULL
            ORDER BY id
            """,
            (RULESET_VERSION,),
        ).fetchall()
        conn.close()
        for pattern, label, weight in rows:
            rules.append(Rule(pattern, label, int(weight or 1)))
    except sqlite3.Error:
        pass

    existing = {(rule.pattern, rule.label) for rule in rules}
    for pattern, label, weight in EXTRA_HARD_RULES:
        if (pattern, label) not in existing:
            rules.append(Rule(pattern, label, weight))

    return rules


def looks_like_copy(text: str) -> bool:
    stripped = text.strip()
    if not stripped:
        return False
    if stripped in SKIP_EXACT:
        return False
    if stripped.startswith(SKIP_STRING_PREFIXES):
        return False
    if re.fullmatch(r"[A-Za-z0-9_./:-]+", stripped) and " " not in stripped:
        return False
    if re.fullmatch(r"[A-Za-z0-9_-]+", stripped):
        return False
    return bool(re.search(r"[A-Za-z]", stripped))


def line_for_offset(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


def clean_text(text: str) -> str:
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def extract_chunks(path: Path) -> list[Chunk]:
    raw = path.read_text(encoding="utf-8")
    chunks: list[Chunk] = []

    # String literals catch arrays, SEO props, table copy, and JSX attributes.
    string_pattern = re.compile(r"(['\"])((?:\\.|(?!\1).)*?)\1", re.DOTALL)
    for match in string_pattern.finditer(raw):
        value = clean_text(match.group(2).replace("\\'", "'").replace('\\"', '"'))
        if looks_like_copy(value):
            chunks.append(Chunk(path, line_for_offset(raw, match.start()), value))

    # JSX visible text between tags.
    jsx_text_pattern = re.compile(r">([^<>{}]+)<", re.DOTALL)
    for match in jsx_text_pattern.finditer(raw):
        value = clean_text(match.group(1))
        if looks_like_copy(value):
            chunks.append(Chunk(path, line_for_offset(raw, match.start(1)), value))

    return chunks


def find_targets(args: argparse.Namespace) -> list[Path]:
    if args.all:
        roots = [SITE_ROOT / "pages", SITE_ROOT / "components", SITE_ROOT / "lib"]
        targets = []
        for root in roots:
            if root.exists():
                targets.extend(root.rglob("*.tsx"))
                targets.extend(root.rglob("*.ts"))
        return sorted(set(targets))

    if args.paths:
        return [SITE_ROOT / path for path in args.paths]

    return [SITE_ROOT / path for path in DEFAULT_TARGETS]


def scan_chunk(chunk: Chunk, rules: list[Rule]) -> list[tuple[Rule, str]]:
    hits: list[tuple[Rule, str]] = []
    for rule in rules:
        try:
            matches = list(re.finditer(rule.pattern, chunk.text, re.IGNORECASE | re.MULTILINE))
        except re.error:
            continue
        for match in matches:
            excerpt = chunk.text[max(0, match.start() - 45): match.end() + 45].strip()
            hits.append((rule, excerpt))
    return hits


def main() -> int:
    parser = argparse.ArgumentParser(description="Check public copy against GPI voice rules.")
    parser.add_argument("paths", nargs="*", help="Site-relative files to scan.")
    parser.add_argument("--all", action="store_true", help="Scan pages, components, and lib.")
    parser.add_argument("--json", action="store_true", help="Emit JSON output.")
    args = parser.parse_args()

    rules = load_rules()
    targets = [path for path in find_targets(args) if path.exists()]

    violations = []
    for path in targets:
        for chunk in extract_chunks(path):
            for rule, excerpt in scan_chunk(chunk, rules):
                violations.append(
                    {
                        "path": str(chunk.path.relative_to(SITE_ROOT)),
                        "line": chunk.line,
                        "label": rule.label,
                        "weight": rule.weight,
                        "excerpt": excerpt,
                    }
                )

    if args.json:
        print(json.dumps({"violations": violations}, indent=2))
    elif violations:
        print("Voice check failed:\n")
        for item in violations:
            print(f"{item['path']}:{item['line']}  {item['label']}")
            print(f"  {item['excerpt']}\n")
    else:
        print(f"Voice check passed ({len(targets)} files).")

    return 1 if violations else 0


if __name__ == "__main__":
    sys.exit(main())
