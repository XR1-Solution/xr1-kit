import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <section data-testid="demo-skeleton" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">skeleton</h2>
      <div className="flex flex-col gap-2 max-w-sm">
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-sm" />
          <div className="flex flex-col gap-1.5 flex-1">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </section>
  )
}
