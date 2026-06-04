import * as React from "react"
import { cn } from "@/lib/utils"

type Status = "online" | "building" | "failed" | "idle"
const DOT: Record<Status, string> = {
  online: "bg-green shadow-[0_0_8px_var(--xr1-glow-green)]",
  building: "bg-amber",
  failed: "bg-red",
  idle: "bg-fg-4",
}

function StatusPill({
  status = "online", className, children, ...props
}: React.ComponentProps<"span"> & { status?: Status }) {
  return (
    <span
      data-status={status}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-bg-2 py-1 pl-2.5 pr-3 font-mono text-xs text-fg-1",
        className,
      )}
      {...props}
    >
      <span className={cn("size-[7px] rounded-full", DOT[status])} />
      {children}
    </span>
  )
}

export { StatusPill }
