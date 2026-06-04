import { render, screen } from "@testing-library/react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

test("renders with role alert and children visible", () => {
  render(
    <Alert variant="danger">
      <AlertTitle>Deployment failed</AlertTitle>
      <AlertDescription>Check the logs for details.</AlertDescription>
    </Alert>,
  )
  expect(screen.getByRole("alert")).toBeInTheDocument()
  expect(screen.getByText("Deployment failed")).toBeInTheDocument()
  expect(screen.getByText("Check the logs for details.")).toBeInTheDocument()
})

test("danger variant applies red left border class", () => {
  render(<Alert variant="danger">error</Alert>)
  expect(screen.getByRole("alert").className).toContain("border-l-red")
})

test("info variant applies cyan left border class", () => {
  render(<Alert variant="info">info</Alert>)
  expect(screen.getByRole("alert").className).toContain("border-l-cyan")
})

test("success variant applies green left border class", () => {
  render(<Alert variant="success">ok</Alert>)
  expect(screen.getByRole("alert").className).toContain("border-l-green")
})

test("warning variant applies amber left border class", () => {
  render(<Alert variant="warning">warn</Alert>)
  expect(screen.getByRole("alert").className).toContain("border-l-amber")
})
