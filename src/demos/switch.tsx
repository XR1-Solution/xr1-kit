import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SwitchDemo() {
  const [syncing, setSyncing] = useState(true)
  const [alerts, setAlerts] = useState(false)
  return (
    <section data-testid="demo-switch" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">switch</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Switch id="sync" checked={syncing} onCheckedChange={setSyncing} />
          <Label htmlFor="sync">auto-sync {syncing ? "on" : "off"}</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="alerts" checked={alerts} onCheckedChange={setAlerts} />
          <Label htmlFor="alerts">deploy alerts</Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch disabled />
          <Label>disabled</Label>
        </div>
      </div>
    </section>
  )
}
