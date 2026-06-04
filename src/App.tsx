import { ButtonDemo } from "./demos/button"
import { BadgeDemo } from "./demos/badge"
import { InputDemo } from "./demos/input"
import { CardDemo } from "./demos/card"
import { TerminalDemo } from "./demos/terminal"
import { MiscDemo } from "./demos/misc"
import { SwitchDemo } from "./demos/switch"
import { CheckboxDemo } from "./demos/checkbox"
import { RadioGroupDemo } from "./demos/radio-group"
import { TabsDemo } from "./demos/tabs"
import { TooltipDemo } from "./demos/tooltip"
import { PopoverDemo } from "./demos/popover"
import { DropdownMenuDemo } from "./demos/dropdown-menu"
import { SelectDemo } from "./demos/select"
import { DialogDemo } from "./demos/dialog"
import { AlertDemo } from "./demos/alert"
import { AvatarDemo } from "./demos/avatar"
import { BreadcrumbDemo } from "./demos/breadcrumb"
import { SkeletonDemo } from "./demos/skeleton"
import { ProgressDemo } from "./demos/progress"
import { TableDemo } from "./demos/table"

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
        <SwitchDemo />
        <CheckboxDemo />
        <RadioGroupDemo />
        <TabsDemo />
        <TooltipDemo />
        <PopoverDemo />
        <DropdownMenuDemo />
        <SelectDemo />
        <DialogDemo />
        <AlertDemo />
        <AvatarDemo />
        <BreadcrumbDemo />
        <SkeletonDemo />
        <ProgressDemo />
        <TableDemo />
      </div>
    </main>
  )
}
