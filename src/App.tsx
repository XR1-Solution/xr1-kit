import { ButtonDemo } from "./demos/button"
import { BadgeDemo } from "./demos/badge"
import { InputDemo } from "./demos/input"
import { CardDemo } from "./demos/card"
import { TerminalDemo } from "./demos/terminal"
import { MiscDemo } from "./demos/misc"

export function App() {
  return (
    <main className="min-h-dvh bg-bg-0 text-fg-1 font-mono">
      <header className="border-b border-line px-6 py-5">
        <p className="font-pixel text-xs uppercase tracking-[0.14em] text-green">xr1 · ui kit</p>
        <h1 className="font-display text-3xl text-fg-0">component gallery</h1>
      </header>
      <div className="mx-auto flex max-w-5xl flex-col gap-12 p-6" data-testid="gallery">
        <ButtonDemo />
        <BadgeDemo />
        <InputDemo />
        <CardDemo />
        <TerminalDemo />
        <MiscDemo />
      </div>
    </main>
  )
}
