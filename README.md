# AI Studio Exporter | Obsidian Edition ⚫

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-Published-4285F4?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/ai-studio-exporter-obsidi/ilkhnmgiliicnmheodofikeeaibfdddk)
[![Version](https://img.shields.io/badge/Version-1.3.0-black)](https://chromewebstore.google.com/detail/ai-studio-exporter-obsidi/ilkhnmgiliicnmheodofikeeaibfdddk)

> **Hyper Mode for your Conversations.** Export Google AI Studio chats to MD, PDF, JSON, or TXT with a state-of-the-art interface.

<p align="center">
  <a href="https://chromewebstore.google.com/detail/ai-studio-exporter-obsidi/ilkhnmgiliicnmheodofikeeaibfdddk">
    <img src="icon.png" alt="AI Studio Exporter Icon" width="150" align="middle" />
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="UI.png" alt="Extension UI Preview" width="300" align="middle" />
</p>

<p align="center">
  <img src="Preview.gif" alt="Extension Preview Gameplay" width="800" />
</p>

<p align="center">
  <a href="https://chromewebstore.google.com/detail/ai-studio-exporter-obsidi/ilkhnmgiliicnmheodofikeeaibfdddk">
    <img src="https://img.shields.io/badge/⬇️_Install_from_Chrome_Web_Store-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Install from Chrome Web Store" />
  </a>
  &nbsp;&nbsp;
  <a href="https://ai-exporter.pro">
    <img src="https://img.shields.io/badge/🌐_Visit_Website-000000?style=for-the-badge" alt="Visit Website" />
  </a>
</p>

---

## ⚫ The "Obsidian" Overhaul (v1.3.0)

This isn't just a tool; it's a premium experience. This exporter features a cutting-edge **Ultra-Dark Carbon Fiber** aesthetic with **Glassmorphism** overlays, making it the most sophisticated exporter for Google AI Studio.

### ✨ Key Features

- **Premium Design System**: Glassmorphism UI with internal shimmer effects, bold typography (Inter), and high-gloss controls.
- **Smart Data Extraction**: A self-contained heuristic engine that identifies user/model messages even in dynamic, obfuscated DOMs.
- **Reasoning Toggle**: Choose whether to include the model's "Thinking" blocks in your exports—perfect for Obsidian knowledge bases.
- **Multi-Format Support**:
  - **Markdown (.md)**: Optimized for Obsidian with proper syntax highlighting.
  - **PDF (.pdf)**: High-quality, client-side generated documents.
  - **JSON (.json)**: Structured raw data for developers.
  - **Plain Text (.txt)**: Quick, no-nonsense text dumps.
- **Connection Stability**: Built-in smart monitors to detect and fix communication gaps with the browser via a dedicated Refresh helper.

---

## 🚀 Installation

### Chrome Web Store (Recommended)

The extension is officially published on the Chrome Web Store:

👉 [**Install AI Studio Exporter**](https://chromewebstore.google.com/detail/ai-studio-exporter-obsidi/ilkhnmgiliicnmheodofikeeaibfdddk)

### Developer Setup (From Source)

If you prefer to build from source or want to contribute:

1. **Clone & build**:

   ```bash
   git clone https://github.com/DVRK-ORG/ai-studio-exporter.git
   cd ai-studio-exporter
   npm install
   npm run build
   ```

2. **Open Extensions**: Navigate to `chrome://extensions/` in Google Chrome.

3. **Enable Developer Mode**: Toggle the switch in the top-right corner.

4. **Load Unpacked**: Click "Load unpacked" and select the **`dist`** folder inside this project directory.

5. **Activate**: Open [Google AI Studio](https://aistudio.google.com/) and **refresh the page** (F5).

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite (Multi-entry for Popup & Content Scripts)
- **Styling**: Tailwind CSS + Pure CSS Refinements
- **Icons**: Lucide React
- **Export Engines**: jsPDF & DOM-to-Text Heuristics

---

## 🔗 Links

- 🌐 **Website**: [ai-exporter.pro](https://ai-exporter.pro)
- 🏪 **Chrome Web Store**: [Install Extension](https://chromewebstore.google.com/detail/ai-studio-exporter-obsidi/ilkhnmgiliicnmheodofikeeaibfdddk)
- 📜 **Changelog**: [changelog.md](changelog.md)

---
