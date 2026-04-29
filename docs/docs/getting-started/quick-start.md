---
title: Quick Start
date: 2026-04-29 11:57:48
---

# Quick Start

Follow the steps below to get started quickly:

## 1) Installation

The easiest way to install Kelivo is to download the latest installer from the [Releases](https://github.com/Chevey339/kelivo/releases/latest) page and follow the release notes to install it on your device/platform.

You can also install it using the following methods:

Install via Scoop on Windows

```powershell
scoop bucket add extras
scoop install kelivo
```

Install via Winget on Windows

```powershell
winget install Psyche.Kelivo
```

---

## 2) Language & Theme

- Go to `Settings` → `Display Settings` to toggle the **theme** (light/dark, color mode, solid background, dynamic color support on Android 12+).
- Adjust the **app font** and **code font** in `Settings` → `Display Settings` → `Font Settings`, and switch the app language (supports system default or manual selection).

## 3) Add Providers

- Go to `Settings` → `Providers`.
- Add the API Key for your desired service (OpenAI, Gemini, Anthropic, Zhipu, etc.).
- For each entry, you can set a name, base URL, API Key, and default model.
- Test connectivity individually or in batch.

## 4) Create Assistants

- Go to `Settings` → `Assistants`.
- Create a new assistant, set its name, avatar, and default provider/model.
- Configure temperature, Top‑p, system prompt, and optional tools.

## 5) Start Chatting

- Start a new session, choose an assistant, or directly select a provider/model to begin a conversation.

## 6) Optional: Search / Tools / TTS

- Enable a web search provider when needed.
- Enable TTS to read responses aloud.
- Connect MCP tools for structured tool calls if required.

If you encounter any issues, check the FAQ or open an Issue on GitHub.
