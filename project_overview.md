# VIBE CODING — Master Workspace & Architecture Overview

> Complete digital experience engineered in `c:\vibe coding`.

---

## 1. Live Websites on Localhost (Port 3000)

The background HTTP server serves all applications on port `3000`:

- 🛡️ **VaultShield Password Manager Hero**: [http://localhost:3000/vaultshield.html](http://localhost:3000/vaultshield.html)
  - Standalone Landing Page: [vaultshield.html](file:///c:/vibe%20coding/vaultshield.html)
  - React Component: [components/VaultShieldHero.tsx](file:///c:/vibe%20coding/components/VaultShieldHero.tsx)
  - shadcn UI Export: [components/ui/vault-shield-hero.tsx](file:///c:/vibe%20coding/components/ui/vault-shield-hero.tsx)
  - Background Video: `https://d8j0ntlcm91z4.cloudfront.net/.../hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4`
  - Inline Lucide Icons: `Zap`, `LockKeyhole`, `Fingerprint`, `ArrowRightCircle`, `Menu`, `X`
  - Animations: Framer Motion spring fade-up variants + AnimatePresence mobile sheet

- 🌟 **Élan Atelier Haute Couture (Main)**: [http://localhost:3000](http://localhost:3000)
  - Entrypoint: [index.html](file:///c:/vibe%20coding/index.html)
  - Design System: [styles/main.css](file:///c:/vibe%20coding/styles/main.css)
  - Logic Engine: [scripts/app.js](file:///c:/vibe%20coding/scripts/app.js)
  - Features: Vertical Runway Reels, Style Concierge, Mocha Mousse Card Carousel, 3D Glass Card, Audio Synthesizer, VIP Wardrobe Checkout

- ⚡ **Vesper.ai Single-Viewport Page**: [http://localhost:3000/vesper.html](http://localhost:3000/vesper.html)
  - Standalone File: [vesper.html](file:///c:/vibe%20coding/vesper.html)

---

## 2. VaultShield Specifications Implemented

| Component / Layer | Implementation |
| :--- | :--- |
| **Heading Font** | `Helvetica Now Display Bold` loaded via online web fonts `<link>` |
| **Body Font** | `Inter` (weights 300-900) via Google Fonts |
| **Color Tokens** | `--color-text: #192837`, `--color-accent: #7342E2`, `--color-login-bg: #F2F2EE` |
| **Background Video** | Fullscreen `absolute inset-0 object-cover` with `autoPlay`, `muted`, `loop`, `playsInline` |
| **Geometric Logo** | Angular polygon custom SVG `viewBox="0 0 256 256"` with fill `#192837` |
| **Navbar** | Desktop links (`Vault`, `Plans`, `Install`, `News`, `Help`), "Start For Free" (`#7342E2`), "Sign In" (`#F2F2EE`) |
| **Mobile Drawer** | `AnimatePresence` sheet (`min(88vw, 360px)`), backdrop blur, slide-in from `x: '100%'` to `x: 0` |
| **Hero Heading** | Clamp size, line-height 1.05, inline `Zap`, `LockKeyhole`, `Fingerprint` icons aligned middle |
| **CTA Button** | Background `#7342E2`, rounded 50px, `min-width: 210px`, `ArrowRightCircle` icon, hover/tap scale |
| **Framer Motion** | Staggered `fadeUp` animation variants (`hidden: { opacity: 0, y: 28 }`, `visible: { opacity: 1, y: 0 }`) |
