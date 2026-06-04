import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
export function MiscDemo() {
  return (
    <section data-testid="demo-misc" className="flex flex-col gap-4">
      <h2 className="font-display text-xl text-fg-0">kbd · separator</h2>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-sm text-fg-2">Quick open</span>
        <Kbd>⌘K</Kbd>
        <Separator orientation="vertical" className="h-4" />
        <span className="font-mono text-sm text-fg-2">Search</span>
        <Kbd>⌘</Kbd>
        <Kbd>P</Kbd>
      </div>
      <Separator />
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-sm text-fg-2">Save</span>
        <Kbd>⌘S</Kbd>
        <Separator orientation="vertical" className="h-4" />
        <span className="font-mono text-sm text-fg-2">Undo</span>
        <Kbd>⌘Z</Kbd>
      </div>
    </section>
  )
}
