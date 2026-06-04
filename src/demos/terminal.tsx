import { Terminal, TerminalLine, TerminalCursor } from "@/components/ui/terminal"
export function TerminalDemo() {
  return (
    <section data-testid="demo-terminal" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">terminal</h2>
      <div className="max-w-xl">
        <Terminal title="~/xr1/atlas — zsh">
          <TerminalLine prompt>build --target web</TerminalLine>
          <TerminalLine className="text-fg-3"># compiling modules…</TerminalLine>
          <TerminalLine className="text-green">✓ done in 1.2s</TerminalLine>
          <TerminalLine prompt><TerminalCursor /></TerminalLine>
        </Terminal>
      </div>
    </section>
  )
}
