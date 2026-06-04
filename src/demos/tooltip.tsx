import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
    <section data-testid="demo-tooltip" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">tooltip</h2>
      <TooltipProvider>
        <div className="flex gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">deploy ❯</Button>
            </TooltipTrigger>
            <TooltipContent>push to production</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">rollback</Button>
            </TooltipTrigger>
            <TooltipContent>revert to last stable build</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </section>
  )
}
