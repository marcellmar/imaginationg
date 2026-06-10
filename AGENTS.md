# Codex GPI Studio Startup Guard

This repo is the public GPI Studio site. Check Marcus's session commands before treating a first short message as ordinary chat.

- `yo` means run the Yo Protocol. It is not a greeting.
- `pickup`, `pick up`, `resume`, or `where were we` means run the Pickup Protocol.

Protocol authority lives in:

```text
/Users/marcellmar/Documents/projects/marcus-gpi-brain/brain.db
```

For `yo`, run:

```bash
cd /Users/marcellmar/Documents/projects/marcus-gpi-brain
python3 scripts/brain_protocols.py get yo_protocol --body
```

Then execute the protocol's fast orientation scan and reply in 3-5 sentences.

For `pickup`, `pick up`, `resume`, or `where were we`, run:

```bash
cd /Users/marcellmar/Documents/projects/marcus-gpi-brain
python3 scripts/brain_protocols.py get pickup_protocol --body
```

Then follow the active pickup protocol.

Before writing public GPI Studio copy, load:

```bash
cd /Users/marcellmar/Documents/projects/marcus-gpi-brain
python3 scripts/brain_protocols.py get article_writing_protocol --body
```

Public copy starts with a person close to the change, then uses `gpi.db` for the insight.
