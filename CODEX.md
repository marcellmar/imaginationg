# Codex GPI Studio Bootloader

This repo is the public GPI Studio site.

Before treating Marcus's first short message as ordinary chat, check it against this command map:

- `yo` means run the Yo Protocol. It is not a greeting.
- `pickup`, `pick up`, `resume`, or `where were we` means run the Pickup Protocol.

Protocol authority lives in the brain repo:

```text
/Users/marcellmar/Documents/projects/marcus-gpi-brain/brain.db
```

When Marcus says `yo`, run:

```bash
cd /Users/marcellmar/Documents/projects/marcus-gpi-brain
python3 scripts/brain_protocols.py get yo_protocol --body
```

Then follow the active protocol.

When Marcus says `pickup` or `pick up`, run:

```bash
cd /Users/marcellmar/Documents/projects/marcus-gpi-brain
python3 scripts/brain_protocols.py get pickup_protocol --body
```

Then follow the active protocol.

Before writing public GPI Studio copy, load:

```bash
cd /Users/marcellmar/Documents/projects/marcus-gpi-brain
python3 scripts/brain_protocols.py get article_writing_protocol --body
```

Public copy starts with a person close to the change, then uses `gpi.db` for the insight.

Before finishing public site copy edits, run:

```bash
npm run voice:check
```

The same core voice check runs automatically before `npm run build`.

Use `npm run voice:check:all` for a wider sweep across pages, components, and lib.
