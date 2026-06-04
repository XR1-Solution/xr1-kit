import { render, screen } from "@testing-library/react"
import { Skeleton } from "@/components/ui/skeleton"

test("renders with animate-pulse class", () => {
  render(<Skeleton className="h-4 w-20" data-testid="sk" />)
  const el = screen.getByTestId("sk")
  expect(el).toBeInTheDocument()
  expect(el.className).toContain("animate-pulse")
})

test("renders with bg-bg-2 class", () => {
  render(<Skeleton data-testid="sk2" />)
  expect(screen.getByTestId("sk2").className).toContain("bg-bg-2")
})
