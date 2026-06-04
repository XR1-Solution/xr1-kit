import { Card, CardHeader, CardDot, CardTitle, CardStatus, CardContent } from "@/components/ui/card"
import { Terminal, TerminalLine, TerminalCursor } from "@/components/ui/terminal"

function TerminalCard({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardDot />
        <CardTitle>deploy.log</CardTitle>
        <CardStatus>RUNNING</CardStatus>
      </CardHeader>
      <CardContent className="p-0">
        <Terminal>
          <TerminalLine prompt>pnpm run deploy --env production</TerminalLine>
          <TerminalLine className="text-fg-3"># Deploying atlas-core v0.4.2 → production</TerminalLine>
          <TerminalLine className="text-green">✓ Build complete (3.4s)</TerminalLine>
          <TerminalLine className="text-green">✓ Assets uploaded (12 files)</TerminalLine>
          <TerminalLine prompt>
            <TerminalCursor />
          </TerminalLine>
        </Terminal>
      </CardContent>
    </Card>
  )
}

export { TerminalCard }
