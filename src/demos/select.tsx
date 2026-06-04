import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function SelectDemo() {
  return (
    <section data-testid="demo-select" className="flex flex-col gap-3 max-w-xs">
      <h2 className="font-display text-xl text-fg-0">select</h2>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="sel-env">environment</Label>
        <Select defaultValue="production">
          <SelectTrigger id="sel-env">
            <SelectValue placeholder="select environment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="production">production</SelectItem>
            <SelectItem value="staging">staging</SelectItem>
            <SelectItem value="development">development</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
