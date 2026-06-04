import { render, screen } from "@testing-library/react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

test("card title-bar renders status dot title and content", () => {
  render(
    <Card><CardHeader><CardTitle>automation.flow</CardTitle></CardHeader>
      <CardContent>Invoice sync</CardContent></Card>,
  )
  expect(screen.getByText("automation.flow")).toBeInTheDocument()
  expect(screen.getByText("Invoice sync")).toBeInTheDocument()
})
