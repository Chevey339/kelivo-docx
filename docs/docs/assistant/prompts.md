---
title: Prompts
date: 2025-09-02 01:16:27
---

# Prompts

Use a System Prompt to define persona, safety rules, and goals. Optionally add starter messages for style.

## Prompt Variables
You can reference dynamic variables in prompts, such as:
- {model}: Current model identifier
- {time}: Local date/time string
- {app_version}: App version string

Your installation may expose additional variables. Use them to keep prompts portable.

## Tips
- Keep the system prompt concise but explicit.
- Use numbered rules for clarity.
- Provide examples via few‑shot messages sparingly to save tokens.

