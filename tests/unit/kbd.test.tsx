import { render, screen } from "@testing-library/react"
import { Kbd } from "@/components/ui/kbd"

test("renders key", () => {
  render(<Kbd>⌘K</Kbd>)
  expect(screen.getByText("⌘K")).toBeInTheDocument()
})
