import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
export function InputDemo() {
  return (
    <section data-testid="demo-input" className="flex max-w-sm flex-col gap-4">
      <h2 className="font-display text-xl text-fg-0">form fields</h2>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="p">project name</Label>
        <Input id="p" prompt defaultValue="atlas-core" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="n">notes</Label>
        <Textarea id="n" placeholder="deploy notes…" />
      </div>
    </section>
  )
}
