import { render, screen } from "@testing-library/react"
import { Button } from "@/components/ui/button"

test("renders children and primary variant classes", () => {
  render(<Button>deploy</Button>)
  const btn = screen.getByRole("button", { name: "deploy" })
  expect(btn).toBeInTheDocument()
  expect(btn.className).toContain("bg-primary")
})

test("ghost variant uses hairline border", () => {
  render(<Button variant="ghost">view logs</Button>)
  expect(screen.getByRole("button", { name: "view logs" }).className).toContain("border-line-strong")
})
