import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"

function Controlled() {
  const [value, setValue] = useState("a")
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" id="r-a" />
        <Label htmlFor="r-a">option a</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" id="r-b" />
        <Label htmlFor="r-b">option b</Label>
      </div>
    </RadioGroup>
  )
}

test("clicking second item makes it checked", async () => {
  render(<Controlled />)
  const itemB = screen.getByRole("radio", { name: "option b" })
  expect(itemB).toHaveAttribute("aria-checked", "false")
  await userEvent.click(itemB)
  expect(itemB).toHaveAttribute("aria-checked", "true")
})
