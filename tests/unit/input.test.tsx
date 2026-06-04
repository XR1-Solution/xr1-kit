import { render, screen } from "@testing-library/react"
import { Input } from "@/components/ui/input"

test("renders terminal prompt prefix when prompt prop set", () => {
  render(<Input prompt defaultValue="atlas-core" aria-label="project" />)
  expect(screen.getByText("xr1 ❯")).toBeInTheDocument()
  expect(screen.getByLabelText("project")).toHaveValue("atlas-core")
})
