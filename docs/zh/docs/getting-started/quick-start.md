---
title: 快速开始
date: 2026-04-29 11:57:48
---

# 快速开始

按照以下步骤快速上手：

## 1）安装

安装 Kelivo 最简单的方法是从 [Releases](https://github.com/Chevey339/kelivo/releases/latest) 页面下载最新版的安装包，并根据发布说明在你的设备/平台上安装。

你也可以使用以下方式安装：

在 Windows 上使用 Scoop 安装

```powershell
scoop bucket add extras
scoop install kelivo
```

在 Windows 上使用 Winget 安装

```powershell
winget install Psyche.Kelivo
```

---

## 2）语言与主题

- 打开 `设置` → `显示设置` 切换 **主题**（浅色/深色，颜色模式，纯色背景，Android 12+ 支持动态配色）。
- 在 `设置` → `显示设置` → `字体设置` 中调整 **应用字体** 和 **代码字体**，还可以切换应用语言（支持跟随系统或手动选择）。

## 3）添加提供商

- 前往 `设置` → `供应商`。
- 添加你所需服务的 API Key（OpenAI、Gemini、Anthropic、智谱等）。
- 每个条目可设置名称、基础地址（Base URL）、API Key 与默认模型。
- 可以进行单个或批量测试，测试连通性。

## 4）创建助手

- 前往 `设置` → `助手`。
- 新建助手，设置名称、头像与默认提供商/模型。
- 配置温度、Top‑p、系统提示词与可选工具。

## 5）开始聊天

- 新建会话，选择助手或直接选择提供商/模型开始对话。

## 6）可选：搜索 / 工具 / 朗读

- 需要时启用网络搜索供应商。
- 开启 TTS 朗读回复。
- 如需结构化工具调用，可连接 MCP 工具。

遇到问题可查看常见问题或在 GitHub 提 Issue。
