import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-line-strong bg-bg-3 transition-all outline-none",
        "focus-visible:shadow-[0_0_0_3px_var(--xr1-glow-green)] disabled:cursor-not-allowed disabled:opacity-40",
        "data-[state=checked]:border-green data-[state=checked]:bg-green-dim",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-3.5 translate-x-0.5 rounded-full bg-fg-3 transition-transform",
          "data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-[var(--xr1-accent-fg)]",
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
