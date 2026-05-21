# Assadavoot Anukool — Portfolio

Next.js 14 portfolio with Three.js 3D background.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Three.js** — animated star particles, wireframe shapes, grid, mouse parallax
- **CSS Modules** — scoped styling per component

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       ← design tokens + resets
│   ├── layout.tsx        ← root layout + metadata
│   └── page.tsx          ← main page (assembles all components)
├── components/
│   ├── ThreeBackground.tsx / (no css) ← Three.js canvas (client only)
│   ├── Navbar.tsx + Navbar.module.css
│   ├── Hero.tsx   + Hero.module.css
│   ├── Skills.tsx + Skills.module.css
│   ├── Experience.tsx + Experience.module.css
│   ├── Education.tsx  + Education.module.css
│   ├── Contact.tsx    + Contact.module.css
│   └── Footer.tsx     + Footer.module.css
├── package.json
├── tsconfig.json
└── next.config.js
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser
open http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Three.js Features

| Feature | Description |
|---------|-------------|
| Star particles | 2,200+ coloured points in 3D space |
| Wireframe shapes | 6 floating Icosahedron / Octahedron / Tetrahedron |
| Grid plane | Subtle grid at the bottom of the scene |
| Mouse parallax | Camera drifts with cursor movement |
| Scroll effect | Camera shifts down as you scroll |
| Pulse animation | Star opacity breathes over time |
