import { Badge } from "@/components/ui/badge"
import { StatusPill } from "@/components/ui/status-pill"
export function BadgeDemo() {
  return (
    <section data-testid="demo-badge" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">badge · status</h2>
      <div className="flex flex-wrap gap-2">
        <Badge variant="tag">react</Badge><Badge variant="tag">node</Badge>
        <Badge variant="outline">v0.1</Badge><Badge>stable</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <StatusPill status="online">online</StatusPill>
        <StatusPill status="building">building</StatusPill>
        <StatusPill status="failed">failed</StatusPill>
        <StatusPill status="idle">idle</StatusPill>
      </div>
    </section>
  )
}
