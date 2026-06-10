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

LOCAL_ANALYSIS_PAGE = SITE_ROOT / "pages" / "insights" / "gpi-analyses" / "[slug].tsx"

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
    (r"\b[Ss]omeone\b", "forbidden: someone", 2),
    (r"\b[Rr]aw read:", "forbidden: raw read label", 2),
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

ARTICLE_HERO_BANNED = [
    re.compile(r"\bpicture\b", re.IGNORECASE),
    re.compile(r"\bhidden read\b", re.IGNORECASE),
    re.compile(r"\bthe hidden read\b", re.IGNORECASE),
]

ARTICLE_HERO_PERSON_PATTERN = re.compile(
    r"\b(you|your|employee|operator|engineer|manager|worker|shopper|patient|customer|buyer)\b",
    re.IGNORECASE,
)


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


def decode_ts_string(value: str) -> str:
    value = value.strip()
    if not value:
        return ""
    quote = value[0]
    if quote not in {"'", '"', "`"}:
        return clean_text(value)
    inner = value[1:-1]
    inner = inner.replace("\\'", "'").replace('\\"', '"').replace("\\`", "`")
    inner = inner.replace("\\n", "\n")
    return inner.strip()


def read_ts_string(raw: str, offset: int) -> tuple[str, int] | None:
    i = offset
    while i < len(raw) and raw[i].isspace():
        i += 1
    if i >= len(raw) or raw[i] not in {"'", '"', "`"}:
        return None

    quote = raw[i]
    j = i + 1
    escaped = False
    while j < len(raw):
        char = raw[j]
        if escaped:
            escaped = False
        elif char == "\\":
            escaped = True
        elif char == quote:
            return decode_ts_string(raw[i:j + 1]), j + 1
        j += 1
    return None


def split_top_level_args(raw: str) -> list[tuple[str, int]]:
    args: list[tuple[str, int]] = []
    start = 0
    depth = 0
    quote = ""
    escaped = False

    for i, char in enumerate(raw):
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue

        if char in {"'", '"', "`"}:
            quote = char
        elif char in "([{":
            depth += 1
        elif char in ")]}":
            depth -= 1
        elif char == "," and depth == 0:
            args.append((raw[start:i].strip(), start))
            start = i + 1

    tail = raw[start:].strip()
    if tail:
        args.append((tail, start))
    return args


def find_matching_paren(raw: str, open_index: int) -> int | None:
    depth = 0
    quote = ""
    escaped = False

    for i in range(open_index, len(raw)):
        char = raw[i]
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue

        if char in {"'", '"', "`"}:
            quote = char
        elif char == "(":
            depth += 1
        elif char == ")":
            depth -= 1
            if depth == 0:
                return i
    return None


def extract_local_articles(raw: str, path: Path) -> list[dict[str, object]]:
    articles: list[dict[str, object]] = []
    builder_pattern = re.compile(r"const\s+(build[A-Za-z0-9]+)\s*=\s*\([^)]*\)\s*[^=]*=>")
    starts = list(builder_pattern.finditer(raw))

    for index, match in enumerate(starts):
        chunk_start = match.start()
        chunk_end = starts[index + 1].start() if index + 1 < len(starts) else raw.find("const localAnalyses", chunk_start)
        if chunk_end == -1:
            chunk_end = len(raw)
        chunk = raw[chunk_start:chunk_end]

        title = match.group(1)
        slug = title
        teaser = ""

        object_teaser = re.search(r"\bteaser\s*:", chunk)
        object_slug = re.search(r"\bslug\s*:", chunk)
        if object_teaser:
            read = read_ts_string(chunk, object_teaser.end())
            if read:
                teaser = read[0]
        if object_slug:
            read = read_ts_string(chunk, object_slug.end())
            if read:
                slug = read[0]

        article_call = chunk.find("article(")
        if article_call != -1:
            open_index = article_call + len("article")
            close_index = find_matching_paren(chunk, open_index)
            if close_index is not None:
                args = split_top_level_args(chunk[open_index + 1:close_index])
                if len(args) >= 6:
                    teaser = decode_ts_string(args[4][0])
                    slug = decode_ts_string(args[5][0])

        bottom_match = re.search(
            r"textBlock\(\s*['\"][^'\"]*(?:bottom|move)-1['\"]\s*,\s*['\"]paragraph['\"]\s*,\s*",
            chunk,
        )
        bottom = ""
        bottom_line = line_for_offset(raw, chunk_start)
        if bottom_match:
            read = read_ts_string(chunk, bottom_match.end())
            if read:
                bottom = read[0]
                bottom_line = line_for_offset(raw, chunk_start + bottom_match.start())

        if teaser or bottom:
            articles.append(
                {
                    "slug": slug,
                    "teaser": teaser,
                    "teaser_line": line_for_offset(raw, chunk_start + (object_teaser.start() if object_teaser else 0)),
                    "bottom": bottom,
                    "bottom_line": bottom_line,
                    "path": path,
                }
            )

    return articles


def check_article_standards() -> list[dict[str, object]]:
    if not LOCAL_ANALYSIS_PAGE.exists():
        return []

    raw = LOCAL_ANALYSIS_PAGE.read_text(encoding="utf-8")
    violations: list[dict[str, object]] = []
    for article in extract_local_articles(raw, LOCAL_ANALYSIS_PAGE):
        slug = str(article["slug"])
        teaser = str(article["teaser"])
        bottom = str(article["bottom"])
        teaser_line = int(article["teaser_line"])
        bottom_line = int(article["bottom_line"])
        teaser_paragraphs = [paragraph.strip() for paragraph in teaser.split("\n\n") if paragraph.strip()]

        if len(teaser_paragraphs) < 2:
            violations.append(
                {
                    "path": str(LOCAL_ANALYSIS_PAGE.relative_to(SITE_ROOT)),
                    "line": teaser_line,
                    "label": "article standard: hero needs at least two paragraphs",
                    "weight": 3,
                    "excerpt": slug,
                }
            )

        first_paragraph = teaser_paragraphs[0] if teaser_paragraphs else teaser
        if not ARTICLE_HERO_PERSON_PATTERN.search(first_paragraph):
            violations.append(
                {
                    "path": str(LOCAL_ANALYSIS_PAGE.relative_to(SITE_ROOT)),
                    "line": teaser_line,
                    "label": "article standard: hero must start close to a person",
                    "weight": 3,
                    "excerpt": clean_text(first_paragraph or slug),
                }
            )

        for pattern in ARTICLE_HERO_BANNED:
            if pattern.search(teaser):
                violations.append(
                    {
                        "path": str(LOCAL_ANALYSIS_PAGE.relative_to(SITE_ROOT)),
                        "line": teaser_line,
                        "label": "article standard: banned hero framing",
                        "weight": 3,
                        "excerpt": clean_text(pattern.pattern),
                    }
                )

        if not re.search(r"\b(At work today|today,|this week|by Friday)\b", bottom, re.IGNORECASE):
            violations.append(
                {
                    "path": str(LOCAL_ANALYSIS_PAGE.relative_to(SITE_ROOT)),
                    "line": bottom_line,
                    "label": "article standard: bottom line needs a workplace action",
                    "weight": 3,
                    "excerpt": clean_text(bottom or slug),
                }
            )

        if re.search(r"\b(Porsche|Citigroup|Citi|Chevron|Microsoft|Tesla|BYD|Lilly|Novo)\s+(should|needs to|has to|must)\b", bottom, re.IGNORECASE):
            violations.append(
                {
                    "path": str(LOCAL_ANALYSIS_PAGE.relative_to(SITE_ROOT)),
                    "line": bottom_line,
                    "label": "article standard: bottom line should transfer to reader workplace",
                    "weight": 3,
                    "excerpt": clean_text(bottom),
                }
            )

    return violations


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
    violations.extend(check_article_standards())

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
