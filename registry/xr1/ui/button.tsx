import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-mono text-sm font-semibold tracking-[0.02em] transition-all duration-100 ease-out outline-none active:translate-y-px disabled:pointer-events-none disabled:opacity-40 focus-visible:ring-1 focus-visible:ring-ring focus-visible:shadow-[0_0_0_4px_var(--xr1-glow-green)] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-green-bright",
        ghost: "border border-line-strong bg-transparent text-fg-1 hover:border-green hover:text-green hover:bg-wash-green",
        secondary: "border border-line bg-bg-2 text-fg-1 hover:bg-bg-3",
        danger: "border border-red-dim bg-transparent text-red hover:bg-[rgba(242,112,110,0.1)]",
        link: "text-green underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-9 px-4",
        lg: "h-10 px-5 text-base",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
)

function Button({
  className, variant, size, asChild = false, ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
