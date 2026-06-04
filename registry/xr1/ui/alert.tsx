import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "flex gap-3 rounded-md border px-4 py-3 font-mono text-sm",
  {
    variants: {
      variant: {
        info: "border-line border-l-2 border-l-cyan bg-bg-1 text-fg-1",
        success: "border-line border-l-2 border-l-green bg-bg-1 text-fg-1",
        warning: "border-line border-l-2 border-l-amber bg-bg-1 text-fg-1",
        danger: "border-line border-l-2 border-l-red bg-bg-1 text-fg-1",
      },
    },
    defaultVariants: { variant: "info" },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("font-semibold text-fg-0", className)} {...props} />
}

function AlertDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-fg-2", className)} {...props} />
}

export { Alert, AlertTitle, AlertDescription }
