import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupDemo() {
  const [region, setRegion] = useState("us-east")
  return (
    <section data-testid="demo-radio-group" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">radio group</h2>
      <RadioGroup value={region} onValueChange={setRegion}>
        {["us-east", "eu-west", "ap-south"].map((r) => (
          <div key={r} className="flex items-center gap-2">
            <RadioGroupItem value={r} id={`rg-${r}`} />
            <Label htmlFor={`rg-${r}`}>{r}</Label>
          </div>
        ))}
      </RadioGroup>
    </section>
  )
}
