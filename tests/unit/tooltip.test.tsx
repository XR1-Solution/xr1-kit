import { render, screen } from "@testing-library/react"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

test("smoke-renders tooltip trigger", () => {
  render(
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>hover me</TooltipTrigger>
        <TooltipContent>deploy to production</TooltipContent>
      </Tooltip>
    </TooltipProvider>,
  )
  expect(screen.getByText("hover me")).toBeInTheDocument()
})
