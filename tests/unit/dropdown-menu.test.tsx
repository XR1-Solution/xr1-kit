import { render, screen } from "@testing-library/react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

test("renders item when defaultOpen", () => {
  render(
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger>open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>view logs</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  )
  expect(screen.getByText("view logs")).toBeInTheDocument()
})
