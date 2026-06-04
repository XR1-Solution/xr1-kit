import { render, screen } from "@testing-library/react"
import { Textarea } from "@/components/ui/textarea"

test("renders with placeholder and spellcheck disabled", () => {
  render(<Textarea placeholder="notes" aria-label="notes" />)
  const ta = screen.getByLabelText("notes")
  expect(ta).toBeInTheDocument()
  expect(ta).toHaveAttribute("spellcheck", "false")
})
