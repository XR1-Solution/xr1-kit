import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface SidebarNavItem {
  id: string
  label: string
  icon?: React.ReactNode
  count?: number
}

interface SidebarNavProps {
  items: SidebarNavItem[]
  active: string
  onSelect: (id: string) => void
  className?: string
  "aria-label"?: string
}

function SidebarNav({ items, active, onSelect, className, "aria-label": ariaLabel }: SidebarNavProps) {
  return (
    <nav aria-label={ariaLabel ?? "Sidebar navigation"} className={cn("flex flex-col gap-0.5", className)}>
      {items.map((item) => {
        const isActive = item.id === active
        return (
          <button
            key={item.id}
            type="button"
            aria-current={isActive ? "page" : undefined}
            onClick={() => onSelect(item.id)}
            className={cn(
              "flex items-center gap-2.5 rounded-sm border-l-2 border-transparent px-2.5 py-2 font-mono text-sm text-fg-2 transition-colors hover:bg-bg-2 hover:text-fg-1 text-left w-full",
              isActive && "bg-wash-green text-green border-l-green",
            )}
          >
            <span aria-hidden className={cn("w-3 text-center text-xs", isActive ? "text-green" : "text-transparent")}>
              ▸
            </span>
            {item.icon && <span className="flex-none">{item.icon}</span>}
            <span className="flex-1">{item.label}</span>
            {item.count != null && (
              <Badge variant="solid" className="ml-auto text-xs">
                {item.count}
              </Badge>
            )}
          </button>
        )
      })}
    </nav>
  )
}

export { SidebarNav }
