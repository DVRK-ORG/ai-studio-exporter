# Changelog - AI Studio Export (Obsidian Edition)

## [v1.3.0] - Chrome Web Store Launch 🚀

**Date:** 2026-02-14 (Valentine's Day 🖤)
**Status:** Official Chrome Web Store Release

### 📋 Step-by-Step Progress Log

#### 1. Chrome Web Store Developer Account

- ✅ Registered Chrome Web Store developer account ($5 fee paid)
- ✅ Billing country set to **United States** (Bahrain not listed by Google)
- ✅ Email verified: `DDVRK1@GMAIL.COM`
- ✅ Publisher display name set to **DARK**
- ✅ Trader declaration: **Non-trader** (free & open-source extension)
- ✅ Notifications enabled: Item review completed, Support issues, Item published

#### 2. Identity Verification

- ⚠️ Bahraini phone number `+973 6669 9553` rejected (unsupported country)
- ✅ Used UK virtual number `+447441419494` for SMS verification — OTP received and accepted
- ✅ Identity documents submitted (passport + address proof)
- ⏳ Verification under review by Google (takes a few hours to a few days)

#### 3. Manifest & Metadata Fixes

- ✅ Updated extension name: `"AI Studio Export | Obsidian"` → `"AI Studio Exporter | Obsidian Edition"`
- ✅ Enhanced description for Chrome Store SEO discoverability
- ✅ Added missing `downloads` permission (required by export engine)
- ✅ Added `homepage_url` linking to GitHub repository
- ✅ Bumped version: `1.2.0` → `1.3.0`

#### 4. Version Synchronization

- ✅ `manifest.json` → v1.3.0
- ✅ `package.json` → v1.3.0 (was v1.0.0)
- ✅ `App.tsx` UI footer → v1.3.0

#### 5. Store Listing Preparation

- ✅ Created `STORE_LISTING.md` with Chrome Web Store copy
- ✅ Short description (132 chars) for store header
- ✅ Detailed description with features, use cases, privacy statement
- ✅ Privacy practices documentation (permissions justification)
- ✅ Category: Productivity

#### 6. Build & Packaging

- ✅ Icons verified: 16×16, 48×48, 128×128 PNG in `public/icons/`
- ✅ Production build completed via `npm run build` (7.05s, Vite v7.3.1)
- ✅ Stray `New Text Document.txt` deleted from project root
- ✅ `dist.zip` created via 7-Zip (first attempt had `dist/` subfolder prefix)
- ✅ Re-zipped correctly → `ai-studio-exporter-v1.3.0.zip` with `manifest.json` at root ✔️

#### 7. Chrome Web Store Upload & Configuration

- ✅ Uploaded `ai-studio-exporter-v1.3.0.zip` to Chrome Web Store developer dashboard
- ✅ Store listing completed with full description, features, and links
- ✅ Category set to **Tools** (under Productivity section)

#### 8. Graphic Assets & Branding

- ✅ Store icon (128×128) uploaded
- ✅ Extension UI screenshot uploaded (1280×800)
- ✅ **Small promo tile** (440×280) — Generated via Flux 2 Pro, dark theme with cyan glow logo
- ✅ **Marquee promo tile** (1400×560) — Generated via Flux 2 Pro, cinematic banner with "Obsidian Edition" tagline, edited in Canva

#### 9. Privacy & Permissions Configuration

- ✅ Single purpose description provided
- ✅ Permission justifications filled for: `activeTab`, `scripting`, `downloads`, `host permission`
- ✅ Remote code usage: **No** (all code bundled locally)
- ✅ Data usage: **No data collected** (all checkboxes unchecked)
- ✅ Privacy certifications: All 3 disclosures certified ✔️
- ✅ Privacy policy URL: GitHub repository
- ✅ Homepage URL: `ai-exporter.pro`
- ✅ Support URL: `https://github.com/DVRK-ORG/ai-studio-exporter/issues`

#### 10. Submission 🚀

- ✅ **Submitted for Google review** — 2026-02-14 at 03:18 AM (Bahrain Time)
- ⏳ Awaiting Google review & approval (typically 1–3 business days)
- ⏳ Public listing goes live after approval

---

## [v1.2.1] - The DVRK-ORG Migration 🐺

**Date:** 2026-01-28
**Status:** Organization & Legal Handover

### 🏛️ Organization Transfer

- **Repo Migration**: Transferred ownership from personal `DVRRK` to the official `DVRK-ORG` organization in all configuration files and documentation.
- **Copyright Update**: Transferred `LICENSE` copyright to `DVRK-ORG`.
- **Metadata**: Updated `package.json` author and repository fields.

### ⚫ UI & Branding Polish

- **Footer Refinement**: Changed footer signature to **"CRAFTED WITH 🖤"**.
- **Orbitron Font**: Integrated `Orbitron` Google Font specifically for the footer signature to give it a futuristic, cybernetic edge.
- **Build Status**: Promoted from "Alpha Build" to **"Stable Build"** in the UI.

## [v1.2.0] - The Obsidian Overhaul (Hyper Mode)

**Date:** 2026-01-15
**Status:** Performance & Aesthetics Optimized

### Premium UI Redesign 💎

- **Ultra-Dark Carbon Fiber Theme**: Implemented a custom micro-textured background system for a high-end, stealth look.
- **Glassmorphism Layers**: Added frosted-glass panels with 12px blur and subtle white/5 borders for depth and sophistication.
- **Glossy Gloss Components**:
  - Overhauled `Button` component with double-skews, shimmer animations, and internal gloss gradients.
  - Improved active/hover states with smooth scaling and glow effects.
- **Silver Wolf Typography**: Integrated Google Fonts (Inter) with heavy weights (900) for a bold, striking header.
- **Animated Status Bar**: Added reactive colors for loading (pulse), success (green glow), and error (red glass) states.

### Connection & Reliability Fixes ⚙️

- **Self-Contained Extraction Engine**: Completely refactored `content.ts` to be import-free. This ensures 100% compatibility with Chrome MV3's isolated world injection.
- **Smart Connection Monitoring**:
  - Implemented a "Receiving end does not exist" detector in the popup.
  - Added a "REFRESH NOW" button that triggers a script re-injection via page reload, eliminating "stuck" extension states.
- **Improved Injection Timing**: Updated `manifest.json` to use `document_start` and broader host permissions for faster activation.

### Build System & Infrastructure 🏗️

- **Project Restructuring**:
  - Created a `public/` directory to manage `manifest.json` and `icons`.
  - Automated asset copying during the Vite build process.
- **Tailwind/PostCSS Integration**:
  - Added missing `tailwind.config.js` and `postcss.config.js`.
  - Fixed the "pathetic UI" issue by ensuring styles are correctly bundled in the `dist` folder.
- **Code Hygiene**: Refined `index.css` to use standard CSS syntax for Tailwind directives, removing IDE linting errors while preserving full feature support.

### v1.1.0 - Security & Robustness Update (Legacy)

- **Security:** Removed external CDN dependencies.
- **Stability:** Added `MutationObserver` to Content Script.
- **Heuristics:** Improved DOM traversal to prioritize ARIA roles.

### v1.0.0 - Initial Release (Legacy)

- **Feature:** Implemented `Manifest V3` architecture.
- **Feature:** Developed "Obsidian" UI theme.
- **Feature:** Export Engine supporting Markdown, PDF, JSON, and TXT.

---
*"Precision is not an act, it is a habit."*
