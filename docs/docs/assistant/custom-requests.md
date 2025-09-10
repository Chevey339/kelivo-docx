---
title: Custom Requests
date: 2025-09-02 01:16:27
---

# Custom Requests

Fine‑tune how the app talks to providers.

## Base URL & Paths
- Override the base URL to use gateways or self‑hosted endpoints.
- Adjust path prefixes if your gateway uses OpenAI‑compatible or custom routes.

## Headers
- Add custom headers for auth, org, or routing.
- Example: `X-Organization: my‑org`.

## Timeouts & Retries
- Configure timeouts and retry counts to handle flaky networks.

## Proxies
- If your environment requires a proxy, set the proxy host/port per platform guidance.

Always ensure your keys are kept secret and transmitted over HTTPS.

