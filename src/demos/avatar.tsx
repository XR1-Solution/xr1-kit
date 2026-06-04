import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <section data-testid="demo-avatar" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">avatar</h2>
      <div className="flex flex-wrap items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>sc</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>jd</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>ab</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>xr</AvatarFallback>
        </Avatar>
      </div>
    </section>
  )
}
