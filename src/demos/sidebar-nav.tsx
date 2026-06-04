import { useState } from "react"
import { SidebarNav } from "../../registry/xr1/blocks/sidebar-nav"

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "projects", label: "Projects", count: 12 },
  { id: "deployments", label: "Deployments", count: 3 },
  { id: "settings", label: "Settings" },
]

export function SidebarNavDemo() {
  const [active, setActive] = useState("projects")
  return (
    <section data-testid="demo-sidebar-nav" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">sidebar nav</h2>
      <div className="w-52 rounded-md border border-line bg-bg-1 p-2">
        <SidebarNav items={NAV_ITEMS} active={active} onSelect={setActive} />
      </div>
    </section>
  )
}
