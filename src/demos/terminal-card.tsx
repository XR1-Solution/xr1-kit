import { TerminalCard } from "../../registry/xr1/blocks/terminal-card"

export function TerminalCardDemo() {
  return (
    <section data-testid="demo-terminal-card" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">terminal card</h2>
      <div className="max-w-xl">
        <TerminalCard />
      </div>
    </section>
  )
}
