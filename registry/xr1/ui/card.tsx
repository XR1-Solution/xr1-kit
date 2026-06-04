import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("overflow-hidden rounded-md border border-line bg-bg-1", className)} {...props} />
}
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-2.5 border-b border-line bg-bg-2 px-3.5 py-2.5", className)}
      {...props}
    />
  )
}
function CardDot({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("size-2 rounded-full bg-green shadow-[0_0_8px_var(--xr1-glow-green)]", className)} {...props} />
}
function CardTitle({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("flex-1 font-mono text-sm text-fg-1", className)} {...props} />
}
function CardStatus({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("font-pixel text-[10px] uppercase tracking-[0.08em] text-green", className)} {...props} />
}
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-4", className)} {...props} />
}
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center gap-2 border-t border-line px-4 py-3", className)} {...props} />
}

export { Card, CardHeader, CardDot, CardTitle, CardStatus, CardContent, CardFooter }
