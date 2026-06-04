import { render, screen } from "@testing-library/react"
import { Label } from "@/components/ui/label"

test("renders an associated label", () => {
  render(<Label htmlFor="x">project name</Label>)
  const label = screen.getByText("project name")
  expect(label).toBeInTheDocument()
  expect(label).toHaveAttribute("for", "x")
})
