# XR1 UI Kit

A [shadcn](https://ui.shadcn.com) component registry implementing the **XR1 Solution** design system — dark TUI/terminal aesthetic, Tailwind v4, Radix UI, JetBrains Mono + Pixelify Sans.

Registry items are installable via `npx shadcn add @xr1/<name>` into any Vite + React + Tailwind v4 project.

---

## Prerequisites

1. A Vite + React + TypeScript project
2. Tailwind CSS v4 (`@tailwindcss/vite` plugin, **not** a `tailwind.config.js`)
3. shadcn initialised: `npx shadcn init`

---

## Installation

### 1. Register the `@xr1` namespace

In your `components.json`, add the registry under `"registries"`. The built JSON
lives at `public/r/` in this repo, so it can be consumed directly from the repo's
raw URL (no separate host needed):

```json
{
  "registries": {
    "@xr1": "https://raw.githubusercontent.com/XR1-Solution/xr1-kit/main/public/r/{name}.json"
  }
}
```

During local development the dev server at `http://localhost:5173` serves the built files from `public/r/`, so use:

```json
{
  "registries": {
    "@xr1": "http://localhost:5173/r/{name}.json"
  }
}
```

### 2. Install the theme first

The theme delivers design tokens, fonts, base styles and the terminal cursor keyframe. Every component depends on it.

```bash
npx shadcn add @xr1/xr1-theme
```

### 3. Load the Google Fonts

The theme ships a CSS `@import` for the fonts, but to avoid FOUC add the `<link>` preload directly in your HTML `<head>` — this is the source of truth for font loading:

```html
<head>
  <!-- ... -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Silkscreen:wght@400;700&family=JetBrains+Mono:ital,wght@0,400..700;1,400..700&display=swap"
  />
</head>
```

### 4. Install components

```bash
npx shadcn add @xr1/xr1-button
npx shadcn add @xr1/xr1-card
# ... or install all at once:
npx shadcn add @xr1/xr1-button @xr1/xr1-badge @xr1/xr1-status-pill @xr1/xr1-card @xr1/xr1-terminal
```

---

## Token Reference

XR1 is dark-only. `:root` and `.dark` are identical.

| Token | Utility class | Value |
|---|---|---|
| Background 0 (base) | `bg-bg-0` | `#0a0c0d` |
| Background 1 (card) | `bg-bg-1` | `#0f1213` |
| Background 2 (surface) | `bg-bg-2` | `#161a1b` |
| Background 3 (raised) | `bg-bg-3` | `#1e2324` |
| Background inset | `bg-bg-inset` | `#070809` |
| Line faint | `border-line-faint` | `#161b1c` |
| Line | `border-line` | `#242b2c` |
| Line strong | `border-line-strong` | `#36403f` |
| Foreground 0 (bright) | `text-fg-0` | `#f2f7f6` |
| Foreground 1 (primary) | `text-fg-1` | `#d7dfdd` |
| Foreground 2 (secondary) | `text-fg-2` | `#93a09e` |
| Foreground 3 (muted) | `text-fg-3` | `#5c6665` |
| Foreground 4 (dim) | `text-fg-4` | `#3a4242` |
| Green (primary accent) | `text-green` / `bg-green` | `#6ee7a0` |
| Green dim | `text-green-dim` | `#3fa56c` |
| Green bright | `text-green-bright` | `#a6f4c5` |
| Amber | `text-amber` | `#f4be5a` |
| Cyan | `text-cyan` | `#5fc9e8` |
| Blue | `text-blue` | `#7c9cf5` |
| Magenta | `text-magenta` | `#e58fc6` |
| Red | `text-red` | `#f2706e` |
| Red dim | `text-red-dim` | `#9e3d3c` |
| Wash green (tint) | `bg-wash-green` | `rgba(110,231,160,0.08)` |

### Fonts

| Token | CSS variable | Family |
|---|---|---|
| Display | `font-display` | Pixelify Sans → system sans |
| Mono (body) | `font-mono` | JetBrains Mono → ui-monospace |
| Pixel (labels) | `font-pixel` | Silkscreen → JetBrains Mono |

### Radius

| Token | Value |
|---|---|
| `rounded-sm` | 2 px (controls, buttons) |
| `rounded-md` | 4 px (cards, inputs, select) |
| `rounded-lg` | 8 px (panels, dialogs, terminal) |

### Utilities

| Class | Effect |
|---|---|
| `xr1-cursor` | Blinking block cursor (`█`, green, `steps(1)`) |
| `xr1-scanlines` | Subtle scanline overlay |
| `xr1-glow` | Green ambient glow (`box-shadow`) |

---

## Component List

All 28 registry items:

| Name | Type | Description |
|---|---|---|
| `xr1-theme` | theme | Design tokens, fonts, base styles, cursor keyframe |
| `xr1-button` | ui | Terminal button — primary / ghost / secondary / danger / link |
| `xr1-badge` | ui | Square badge — solid / outline / tag (`#`) |
| `xr1-status-pill` | ui | Rounded pill with colored status dot (online / building / failed / idle) |
| `xr1-input` | ui | Terminal field with optional prompt (`xr1 ❯`) prefix |
| `xr1-textarea` | ui | Mono textarea with green focus ring |
| `xr1-label` | ui | Uppercase pixel-style field label |
| `xr1-card` | ui | Panel with optional title-bar, status dot, and footer |
| `xr1-terminal` | ui | Terminal window with macOS-style traffic-light header and blinking cursor |
| `xr1-kbd` | ui | Keyboard shortcut key cap |
| `xr1-separator` | ui | Hairline separator (horizontal or vertical) |
| `xr1-switch` | ui | TUI toggle switch |
| `xr1-checkbox` | ui | Square checkbox with green check |
| `xr1-radio-group` | ui | Radio group with green dot indicator |
| `xr1-tabs` | ui | Underline tabs with green active indicator |
| `xr1-tooltip` | ui | Mono tooltip popover |
| `xr1-popover` | ui | Panel popover |
| `xr1-dropdown-menu` | ui | Context menu with wash-green highlights |
| `xr1-select` | ui | Single-select with check indicator |
| `xr1-dialog` | ui | Modal dialog with overlay and close button |
| `xr1-alert` | ui | Alert banner — info / success / warning / danger |
| `xr1-avatar` | ui | Square avatar tile with monogram fallback |
| `xr1-breadcrumb` | ui | Breadcrumb trail with `/` separator |
| `xr1-skeleton` | ui | Animated pulse skeleton placeholder |
| `xr1-progress` | ui | Green progress bar |
| `xr1-table` | ui | Mono data table with pixel-font headers |
| `xr1-sidebar-nav` | block | Console sidebar navigation with active green indicator and count badges |
| `xr1-terminal-card` | block | Card with title-bar + embedded terminal (deploy log pattern) |

---

## Scripts

```bash
pnpm dev            # Start Vite dev server (preview gallery at http://localhost:5173)
pnpm build          # Vite production build of the preview app
pnpm typecheck      # TypeScript check (no emit)
pnpm test           # Vitest unit tests
pnpm test:e2e       # Playwright browser tests (starts dev server automatically)
pnpm registry:build # Build registry JSON to public/r/ (shadcn build + custom script)
```

### Registry build output

`pnpm registry:build` emits one JSON file per registry item into `public/r/` (e.g. `public/r/xr1-button.json`). The dev server serves this directory statically. `public/r/` is **committed** so the registry is installable straight from the repo's raw URL (see [Installation](#installation)); rebuild and commit it whenever a component or token changes.

---

## Design system reference

Tokens mirror `~/xr1/design-system/colors_and_type.css`. The styling is faithful to the terminal specimens: hairline 1 px borders, square radii, green focus ring, `active:translate-y-px` press, `steps(1)` blinking cursor, no emoji.
