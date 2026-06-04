import { render, screen } from "@testing-library/react"
import { Terminal, TerminalLine } from "@/components/ui/terminal"

test("renders title bar name and a prompted line", () => {
  render(
    <Terminal title="~/xr1/atlas — zsh">
      <TerminalLine prompt>build --target web</TerminalLine>
    </Terminal>,
  )
  expect(screen.getByText("~/xr1/atlas — zsh")).toBeInTheDocument()
  expect(screen.getByText(/build --target web/)).toBeInTheDocument()
})
