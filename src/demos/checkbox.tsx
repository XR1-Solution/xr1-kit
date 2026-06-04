import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  return (
    <section data-testid="demo-checkbox" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">checkbox</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox id="cb-a" checked={a} onCheckedChange={(v) => setA(v === true)} />
          <Label htmlFor="cb-a">enable monitoring</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="cb-b" checked={b} onCheckedChange={(v) => setB(v === true)} />
          <Label htmlFor="cb-b">auto-rollback on failure</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox disabled />
          <Label>disabled</Label>
        </div>
      </div>
    </section>
  )
}
