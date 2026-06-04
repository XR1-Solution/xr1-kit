import { render, screen } from "@testing-library/react"
import { TerminalCard } from "../../registry/xr1/blocks/terminal-card"

test("renders card title deploy.log and terminal content", () => {
  render(<TerminalCard />)
  expect(screen.getByText("deploy.log")).toBeInTheDocument()
  // Terminal renders its children in a <pre>; assert at least one terminal line
  expect(screen.getByText(/Deploying/)).toBeInTheDocument()
})
