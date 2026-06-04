import * as React from "react"
import { cn } from "@/lib/utils"

type InputProps = React.ComponentProps<"input"> & { prompt?: boolean }

function Input({ className, prompt = false, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md border border-input bg-bg-inset px-3 py-2",
        "focus-within:border-green focus-within:shadow-[0_0_0_3px_var(--xr1-glow-green)]",
        className,
      )}
    >
      {prompt && <span className="select-none font-mono text-sm text-green">xr1 ❯</span>}
      <input
        className="min-w-0 flex-1 bg-transparent font-mono text-sm text-fg-0 outline-none placeholder:text-fg-3 disabled:opacity-40"
        spellCheck={false}
        {...props}
      />
    </div>
  )
}

export { Input }
