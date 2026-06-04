import { render, screen } from "@testing-library/react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

test("shows selected value in trigger", () => {
  render(
    <Select defaultValue="production">
      <SelectTrigger aria-label="environment">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="production">production</SelectItem>
        <SelectItem value="staging">staging</SelectItem>
      </SelectContent>
    </Select>,
  )
  expect(screen.getByText("production")).toBeInTheDocument()
})
