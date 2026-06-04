import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function PopoverDemo() {
  return (
    <section data-testid="demo-popover" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">popover</h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">filter ▾</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-3">
            <p className="font-pixel text-[10px] uppercase tracking-[0.12em] text-fg-4">filters</p>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="pop-env">environment</Label>
              <Input id="pop-env" placeholder="production" />
            </div>
            <Button size="sm">apply</Button>
          </div>
        </PopoverContent>
      </Popover>
    </section>
  )
}
