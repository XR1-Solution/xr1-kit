import { render, screen } from "@testing-library/react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

test("renders content when defaultOpen", () => {
  render(
    <Popover defaultOpen>
      <PopoverTrigger>open</PopoverTrigger>
      <PopoverContent>filter options</PopoverContent>
    </Popover>,
  )
  expect(screen.getByText("filter options")).toBeInTheDocument()
})
