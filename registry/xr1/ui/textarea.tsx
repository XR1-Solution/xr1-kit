import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-20 w-full rounded-md border border-input bg-bg-inset px-3 py-2 font-mono text-sm text-fg-0 outline-none",
        "placeholder:text-fg-3 focus-visible:border-green focus-visible:shadow-[0_0_0_3px_var(--xr1-glow-green)] disabled:opacity-40",
        className,
      )}
      spellCheck={false}
      {...props}
    />
  )
}

export { Textarea }
