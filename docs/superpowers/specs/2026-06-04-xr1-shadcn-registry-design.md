# XR1 Solution — shadcn component registry (`xr1-kit`)

**Data:** 2026-06-04
**Stato:** design approvato in brainstorming, in attesa di review della spec
**Sorgente design system:** `~/xr1/design-system` (token in `colors_and_type.css`, brand in `README.md`)

---

## 1 · Obiettivo

Costruire una **libreria di componenti React basata su shadcn** che implementa fedelmente i
token e l'estetica TUI/terminal del design system XR1, **distribuibile via shadcn CLI** tramite
un registry. In più, una **app di preview (Vite)** che mostra ogni componente e fa da target per
i test.

Risultato d'uso per un consumer:

```bash
# l'intero brand (token + font + base) in un colpo:
npx shadcn@latest add https://<host>/r/xr1-theme.json
# singolo componente:
npx shadcn@latest add https://<host>/r/xr1-button.json
```

I file `public/r/*.json` sono statici e host-agnostici: si caricano su qualsiasi host (o si
servono in locale dalla preview app su `/r/*`).

---

## 2 · Stack & vincoli

- **Tailwind CSS v4** (CSS-first, `@theme`/`@theme inline`) — allineato allo stack del committente.
- **React 19** + TypeScript. Componenti basati su **Radix UI** dove serve comportamento.
- **Icone:** `lucide-react` (come prescritto dal DS; nessun icon set proprietario).
- **Varianti:** `class-variance-authority` + `cn()` (`clsx` + `tailwind-merge`).
- **Dark-only:** il DS non ha tema chiaro. `:root` e `.dark` ricevono valori identici, così i
  componenti sono scuri a prescindere dal toggle del consumer.
- **Build registry:** `shadcn build` legge `registry.json` ed emette `public/r/*.json`. Non
  richiede framework: la preview app è un extra per review e test, non una dipendenza del build.
- **Fedeltà al DS (non negoziabile):** bordi hairline 1px > ombre, raggi square-leaning
  (controlli 2px, card/input 4px, pannelli 8px), focus ring verde, press `translateY(1px)`,
  cursore a blocco lampeggiante `steps(1)`, prompt `xr1 ❯`, nessuna emoji.

---

## 3 · Struttura del progetto

```
xr1-kit/
├─ package.json            # deps runtime (react, radix, cva, clsx, tailwind-merge, lucide-react)
│                          # devDeps (shadcn, vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite,
│                          #          typescript, vitest, @testing-library/react, @testing-library/jest-dom,
│                          #          jsdom, @playwright/test)
├─ components.json         # config shadcn: schema v4, aliases, registries (@xr1)
├─ registry.json           # manifest: tutti gli item del registry
├─ tsconfig.json           # path alias @/* (preview + typecheck)
├─ vite.config.ts          # plugin react + @tailwindcss/vite + alias @/*
├─ index.html
├─ registry/xr1/
│  ├─ lib/utils.ts         # cn() — spedito così il registry è self-contained
│  ├─ ui/*.tsx             # i componenti
│  └─ blocks/*.tsx         # composizioni (sidebar-nav, terminal-card)
├─ src/
│  ├─ main.tsx             # entry preview app
│  ├─ App.tsx              # gallery: una sezione per componente
│  ├─ demos/*.tsx          # demo isolata per componente (target dei test)
│  └─ styles/globals.css   # token + @theme + @import tailwind + font
├─ public/r/*.json         # output di `shadcn build` (servito da Vite su /r/*)
├─ tests/
│  ├─ unit/*.test.tsx      # vitest + testing-library
│  └─ e2e/*.spec.ts        # playwright (gallery)
└─ README.md               # install, config @xr1, riferimento token
```

**Alias:** la preview app risolve gli import in stile-consumer dei componenti
(`@/lib/utils`, `@/components/ui/<x>`) verso i sorgenti del registry
(`registry/xr1/lib/utils.ts`, `registry/xr1/ui/<x>.tsx`) via `tsconfig.paths` + `vite.resolve.alias`.
In fase di install, la shadcn CLI riscrive questi import secondo gli alias del consumer.

---

## 4 · Strategia di theming

Un item `xr1-theme` trasporta l'intero brand.

### 4.1 Mapping token shadcn ← XR1 (`cssVars`, identico su root e dark)

| shadcn var | XR1 token | valore |
|---|---|---|
| `--background` | `bg-0` | `#0A0C0D` |
| `--foreground` | `fg-1` | `#D7DFDD` |
| `--card` | `bg-1` | `#0F1213` |
| `--card-foreground` | `fg-1` | `#D7DFDD` |
| `--popover` | `bg-2` | `#161A1B` |
| `--popover-foreground` | `fg-1` | `#D7DFDD` |
| `--primary` | `green` | `#6EE7A0` |
| `--primary-foreground` | `accent-fg` | `#04130A` |
| `--secondary` | `bg-2` | `#161A1B` |
| `--secondary-foreground` | `fg-1` | `#D7DFDD` |
| `--muted` | `bg-2` | `#161A1B` |
| `--muted-foreground` | `fg-3` | `#5C6665` |
| `--accent` | `bg-3` | `#1E2324` |
| `--accent-foreground` | `fg-0` | `#F2F7F6` |
| `--destructive` | `red` | `#F2706E` |
| `--destructive-foreground` | `accent-fg` | `#04130A` |
| `--border` | `line` | `#242B2C` |
| `--input` | `line` | `#242B2C` |
| `--ring` | `green` | `#6EE7A0` |
| `--radius` | r-2 | `0.25rem` (4px) |

> Nota sul clash di naming: in XR1 "accent" = verde, ma in shadcn `--accent` è una superficie
> di hover sobria. Manteniamo il **verde su `--primary`** e mappiamo `--accent` → `bg-3`.

### 4.2 Token nativi XR1 (`css`, via `@theme inline`)

Esposti come utility Tailwind così i componenti possono usare classi brand dirette:
- **Colori:** `--color-bg-0..3`, `--color-bg-inset`, `--color-line-faint|line|line-strong`,
  `--color-fg-0..4`, `--color-green|green-dim|green-bright`, `--color-amber|cyan|blue|magenta|red|red-dim`
  → utility `bg-bg-inset`, `text-fg-2`, `border-line-strong`, `text-green`, `text-amber`, …
- **Font:** `--font-display` (Pixelify Sans), `--font-mono` (JetBrains Mono), `--font-pixel`
  (Silkscreen) → `font-display`, `font-mono`, `font-pixel`.
- **Raggi extra:** `--radius-control` (2px), `--radius-panel` (8px).
- **Wash/glow:** `--wash-green`, `--glow-green`; shadow `--shadow-2`, `--ring-focus`, `--glow-soft`.

### 4.3 Base & motion (`css`)
- `::selection { background: var(--green); color: var(--accent-fg) }`
- keyframe **`xr1-blink`** (`steps(1)`) per il cursore a blocco; `prefers-reduced-motion` lo
  disattiva.
- utility opzionali `xr1-scanlines` (CRT) e `xr1-glow` (phosphor radiale verde).

### 4.4 Font
Caricati da Google Fonts via `@import` in `globals.css`; il README documenta anche il `<link>`
in `<head>` come fallback offline/self-host.

---

## 5 · Elenco componenti (registry items)

Namespace **`@xr1`**, nomi prefissati `xr1-`. Ogni item UI dichiara `dependencies` npm e
`registryDependencies` (almeno `utils`; il theme è prerequisito documentato / namespacato).

**Foundation**
- `xr1-theme` — `registry:style`: `cssVars` + `css` + (belt-and-suspenders) file `globals.css`. Nessuna dep npm (font via CDN).
- `utils` — `registry:lib`: `cn()`. dep: `clsx`, `tailwind-merge`.

**Primitive del DS** (`registry:ui`)
| item | note di stile | dep npm |
|---|---|---|
| `xr1-button` | variants primary/ghost/danger/secondary/link + sizes; press `translateY(1px)` | cva, @radix-ui/react-slot |
| `xr1-input` | campo terminal su `bg-inset`; prop opzionali prefix `xr1 ❯` e cursore lampeggiante | — |
| `xr1-textarea` | idem input | — |
| `xr1-label` | mono uppercase, tracking .14em | @radix-ui/react-label |
| `xr1-badge` | variants solid/outline + `tag` (prefisso `#`) | cva |
| `xr1-status-pill` | dot colorato + label: online/building/failed/idle | cva |
| `xr1-card` | pannello `bg-1` + title-bar opzionale (dot + filename mono + tag Silkscreen) | — |
| `xr1-terminal` ⭐ | finestra: barra traffic-light, prompt, cursore a blocco | — |
| `xr1-switch` | toggle TUI | @radix-ui/react-switch |
| `xr1-tabs` | underline verde sull'attivo | @radix-ui/react-tabs |
| `xr1-kbd` | tasto stile `⌘K` | — |
| `xr1-separator` | hairline | @radix-ui/react-separator |

**Estesi shadcn re-skinnati** (`registry:ui`)
| item | dep npm |
|---|---|
| `xr1-dialog` | @radix-ui/react-dialog |
| `xr1-dropdown-menu` | @radix-ui/react-dropdown-menu |
| `xr1-select` | @radix-ui/react-select |
| `xr1-tooltip` | @radix-ui/react-tooltip |
| `xr1-popover` | @radix-ui/react-popover |
| `xr1-checkbox` | @radix-ui/react-checkbox |
| `xr1-radio-group` | @radix-ui/react-radio-group |
| `xr1-table` | — |
| `xr1-alert` | — |
| `xr1-avatar` | @radix-ui/react-avatar |
| `xr1-breadcrumb` | — |
| `xr1-skeleton` | — |
| `xr1-progress` | @radix-ui/react-progress |

**Blocks** (`registry:block`)
- `xr1-sidebar-nav` — la nav del console kit (▸ + bordo sinistro verde sull'attivo).
- `xr1-terminal-card` — terminal + card composti, esempio "signature".

Tutti gli item UI usano `lucide-react` per le icone necessarie (X dialog, chevron select, check, …).

---

## 6 · Meccanica registry

- `registry.json` ($schema shadcn) elenca ogni item con `name`, `type`, `title`, `description`,
  `dependencies`, `registryDependencies`, `files[{path,type,target}]`, e per il theme `cssVars`/`css`.
- `components.json` configura lo stile v4, gli alias, e il **registry namespacato `@xr1`** così i
  consumer possono fare `npx shadcn add @xr1/button`.
- `shadcn build` → genera `public/r/*.json`.
- **Da confermare in implementazione contro i doc shadcn correnti (via context7):** il token di
  `type` esatto per il theme (`registry:style` vs `registry:theme`), la forma esatta dei
  `registryDependencies` cross-item (nome vs URL vs `@xr1/...`) e il templating del base-URL.
  La spec fissa l'intento; i dettagli del CLI si verificano sulla doc viva.

---

## 7 · Testing & verifica

**Test della libreria**
- **Vitest + Testing Library (jsdom):** per ogni componente — render senza crash, le varianti
  applicano le classi attese, interazioni Radix chiave (switch on/off, dialog open/close via
  trigger, select apre e seleziona, checkbox toggla, tabs cambia pannello).
- **Playwright (e2e):** carica la gallery della preview app, asserisce **zero errori di console**,
  esercita i componenti interattivi, cattura screenshot di riferimento.

**Verifica del lavoro (gate di completamento)**
1. `tsc --noEmit` pulito su tutti i sorgenti.
2. `npx shadcn build` esce 0 ed emette un JSON valido per ogni item.
3. `vitest run` verde.
4. `playwright test` verde.
5. *(opzionale, non deliverable)* install end-to-end: servo `public/r` e faccio
   `shadcn add` di 2-3 item in un progetto usa-e-getta per validare il flusso CLI.

---

## 8 · Fuori scope (YAGNI)

Niente tema chiaro, niente sito-doc curato (la preview app è una gallery essenziale), niente
Next.js, niente icon set proprietario, niente componenti non elencati (chart, calendar,
carousel, command palette) salvo richiesta esplicita.

---

## 9 · Rischi / questioni aperte

- **Schema registry shadcn in evoluzione:** i token di `type` e la gestione `registryDependencies`
  vanno verificati sulla doc corrente prima di scrivere `registry.json` (vedi §6).
- **Font CDN:** dipendenza da Google Fonts a runtime; mitigata documentando il self-host.
- **`@theme` + iniezione `css` di shadcn:** l'ordine di `@import` font potrebbe non essere
  gestito dall'iniezione `css`; mitigato spedendo anche `globals.css` come file.
