import { render, screen } from "@testing-library/react"
import { Progress } from "@/components/ui/progress"

test("renders progressbar role with aria-valuenow", () => {
  render(<Progress value={42} />)
  const bar = screen.getByRole("progressbar")
  expect(bar).toBeInTheDocument()
  expect(bar).toHaveAttribute("aria-valuenow", "42")
})

test("renders with 0 value", () => {
  render(<Progress value={0} />)
  const bar = screen.getByRole("progressbar")
  expect(bar).toHaveAttribute("aria-valuenow", "0")
})

test("renders with 100 value", () => {
  render(<Progress value={100} />)
  const bar = screen.getByRole("progressbar")
  expect(bar).toHaveAttribute("aria-valuenow", "100")
})

test("clamps the indicator transform when value exceeds 100", () => {
  render(<Progress value={150} />)
  const indicator = document.querySelector(".bg-green") as HTMLElement
  expect(indicator.style.transform).toBe("translateX(-0%)")
})
