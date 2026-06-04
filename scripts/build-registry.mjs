// Emits registry JSON for items that have no `files` array (e.g. the theme),
// which the shadcn CLI `build` command skips. File-based items are emitted by
// `shadcn build` itself. Run after it: `shadcn build && node scripts/build-registry.mjs`.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs"
import path from "node:path"

const OUT_DIR = "public/r"
const SCHEMA = "https://ui.shadcn.com/schema/registry-item.json"
const NAME_RE = /^[a-z0-9][a-z0-9._-]*$/i

const registry = JSON.parse(readFileSync("registry.json", "utf8"))
mkdirSync(OUT_DIR, { recursive: true })

let emitted = 0
for (const item of registry.items ?? []) {
  if (item.files) continue // file-based items are emitted by `shadcn build`
  if (typeof item.name !== "string" || !NAME_RE.test(item.name)) {
    throw new Error(`Invalid registry item name: ${JSON.stringify(item.name)}`)
  }
  const outFile = path.join(OUT_DIR, `${item.name}.json`)
  // Defense in depth: the resolved file must live directly inside OUT_DIR.
  if (path.dirname(path.resolve(outFile)) !== path.resolve(OUT_DIR)) {
    throw new Error(`Refusing to write outside ${OUT_DIR}: ${item.name}`)
  }
  writeFileSync(outFile, JSON.stringify({ ...item, $schema: SCHEMA }, null, 2) + "\n")
  emitted++
}
console.log(`build-registry: emitted ${emitted} no-files item(s) to ${OUT_DIR}/`)
