import * as React from "react"
import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 items-center rounded-sm border border-line-strong bg-bg-2 px-1.5 font-mono text-[11px] text-fg-2",
        className,
      )}
      {...props}
    />
  )
}

export { Kbd }
