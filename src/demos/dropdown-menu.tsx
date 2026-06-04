import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownMenuDemo() {
  return (
    <section data-testid="demo-dropdown-menu" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">dropdown menu</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">actions ▾</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>deployment</DropdownMenuLabel>
          <DropdownMenuItem>view logs</DropdownMenuItem>
          <DropdownMenuItem>rollback</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>destroy</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  )
}
