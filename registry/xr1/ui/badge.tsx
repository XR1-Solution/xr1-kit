import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center font-mono text-xs leading-none transition-colors",
  {
    variants: {
      variant: {
        solid: "rounded-sm border border-line bg-bg-2 px-2.5 py-1 text-fg-1",
        outline: "rounded-sm border border-line px-2.5 py-1 text-fg-2",
        tag: "rounded-sm border border-line px-2.5 py-1 text-fg-2 before:content-['#'] before:mr-1 before:text-green-dim",
      },
    },
    defaultVariants: { variant: "solid" },
  },
)

function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
