import { render, screen } from "@testing-library/react"
import { Badge } from "@/components/ui/badge"
import { StatusPill } from "@/components/ui/status-pill"

test("tag variant renders with hash affordance class", () => {
  render(<Badge variant="tag">react</Badge>)
  expect(screen.getByText("react").className).toContain("before:content-['#']")
})

test("status pill shows label and status data attr", () => {
  render(<StatusPill status="online">online</StatusPill>)
  const el = screen.getByText("online")
  expect(el).toBeInTheDocument()
  expect(el.closest("[data-status]")).toHaveAttribute("data-status", "online")
})
