import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

function Controlled() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false)
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={(v) => setChecked(v === true)}
      aria-label="accept"
    />
  )
}

test("toggles checked state on click", async () => {
  render(<Controlled />)
  const cb = screen.getByRole("checkbox", { name: "accept" })
  expect(cb).toHaveAttribute("aria-checked", "false")
  await userEvent.click(cb)
  expect(cb).toHaveAttribute("aria-checked", "true")
})
