import { Button } from "@/components/ui/button"
export function ButtonDemo() {
  return (
    <section data-testid="demo-button" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">button</h2>
      <div className="flex flex-wrap gap-3">
        <Button>deploy ❯</Button>
        <Button variant="ghost">view logs</Button>
        <Button variant="danger">destroy</Button>
        <Button variant="secondary">cancel</Button>
        <Button disabled>disabled</Button>
      </div>
    </section>
  )
}
