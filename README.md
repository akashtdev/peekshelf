# PeekShelf

<div align="center">

**Spatial bookmark manager that transforms how you organize and access your bookmarks**

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

PeekShelf is a **spatial browser extension** that replaces your "New Tab" page with an infinite, interactive canvas for visually organizing your digital life. Instead of a static list of links, PeekShelf gives you an unbounded 2D workspace where you can freely place, group, and arrange items. It feels less like a bookmark tab and more like a creative OS for your web content.

## Features

- **Infinite Spatial Canvas** — Pan, zoom, group, and arrange bookmarks freely in a 2D workspace.
- **Rich Media Support** — Auto-fetching metadata for bookmarks, images, and articles to give relevent look.
- **Multiple View Modes** — Seamlessly switch between Canvas, Grid, and List views.
- **Instant Shift-Peek** — Preview any link immediately without leaving the workspace.
- **Chrome sync** — Integrates with Chrome's native bookmarks

## Tech Stack
| Category | Technology |
|----------|------------|
| **Extension Framework** | [WXT](https://wxt.dev) 0.20 |
| **Build Tool** | Vite 7 |
| **UI Framework** | React 19 |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com) + Base UI |
| **Icons** | [Hugeicons](https://hugeicons.com) |
| **Linting** | Biome |
| **Git Hooks** | Lefthook |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- Chrome browser

### Development

```bash
# Install dependencies
bun install

# Start dev server with HMR
bun dev

# Load in Chrome:
# 1. Go to chrome://extensions
# 2. Enable "Developer mode"
# 3. Click "Load unpacked"
# 4. Select .output/chrome-mv3 folder
```

### Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server (Chrome) |
| `bun dev:firefox` | Start dev server (Firefox) |
| `bun build` | Production build (Chrome) |
| `bun build:firefox` | Production build (Firefox) |
| `bun zip` | Create extension zip |
| `bun run compile` | TypeScript check |
| `bun run lint` | Lint code |
| `bun run lint:fix` | Auto-fix lint issues |

## License

MIT