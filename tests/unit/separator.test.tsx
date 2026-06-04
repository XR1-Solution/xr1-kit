import { render, screen } from "@testing-library/react"
import { Separator } from "@/components/ui/separator"

test("renders a non-decorative separator with orientation", () => {
  render(<Separator orientation="vertical" decorative={false} />)
  const sep = screen.getByRole("separator")
  expect(sep).toHaveAttribute("aria-orientation", "vertical")
})
