import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

function Controlled() {
  const [on, setOn] = useState(false)
  return <Switch checked={on} onCheckedChange={setOn} aria-label="sync" />
}

test("toggles checked state on click", async () => {
  render(<Controlled />)
  const sw = screen.getByRole("switch", { name: "sync" })
  expect(sw).toHaveAttribute("aria-checked", "false")
  await userEvent.click(sw)
  expect(sw).toHaveAttribute("aria-checked", "true")
})
