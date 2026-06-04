import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return (
    <section data-testid="demo-progress" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">progress</h2>
      <div className="flex flex-col gap-3 max-w-sm">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs text-fg-3">build · 42%</span>
          <Progress value={42} />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs text-fg-3">deploy · 78%</span>
          <Progress value={78} />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs text-fg-3">complete · 100%</span>
          <Progress value={100} />
        </div>
      </div>
    </section>
  )
}
