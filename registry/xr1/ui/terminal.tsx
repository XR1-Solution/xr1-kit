import * as React from "react"
import { cn } from "@/lib/utils"

function Terminal({ title, className, children, ...props }: React.ComponentProps<"div"> & { title?: string }) {
  return (
    <div
      className={cn("overflow-hidden rounded-lg border border-line bg-bg-inset shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]", className)}
      {...props}
    >
      <div className="flex items-center gap-2 border-b border-line bg-bg-2 px-3 py-2.5">
        <span aria-hidden className="size-[11px] rounded-full bg-red" />
        <span aria-hidden className="size-[11px] rounded-full bg-amber" />
        <span aria-hidden className="size-[11px] rounded-full bg-green" />
        {title && <span className="ml-2 font-mono text-[11px] text-fg-3">{title}</span>}
      </div>
      <pre className="m-0 whitespace-pre-wrap p-3.5 font-mono text-sm leading-[1.7] text-fg-1">{children}</pre>
    </div>
  )
}

function TerminalLine({ prompt = false, className, children, ...props }: React.ComponentProps<"span"> & { prompt?: boolean }) {
  return (
    <span className={cn("block", className)} {...props}>
      {prompt && <span className="text-green">xr1 ❯ </span>}
      {children}
    </span>
  )
}

function TerminalCursor() {
  return <span className="xr1-cursor" aria-hidden>█</span>
}

export { Terminal, TerminalLine, TerminalCursor }
