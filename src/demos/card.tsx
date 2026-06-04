import { Card, CardHeader, CardDot, CardTitle, CardStatus, CardContent, CardFooter } from "@/components/ui/card"
export function CardDemo() {
  return (
    <section data-testid="demo-card" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">card</h2>
      <div className="max-w-sm">
        <Card>
          <CardHeader>
            <CardDot />
            <CardTitle>automation.flow</CardTitle>
            <CardStatus>ACTIVE</CardStatus>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-fg-2">Invoice sync pipeline running. Last triggered 2 min ago.</p>
          </CardContent>
          <CardFooter>
            <span className="font-mono text-xs text-fg-3">3 steps · 0 errors</span>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
