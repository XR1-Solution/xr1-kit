import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SidebarNav } from "../../registry/xr1/blocks/sidebar-nav"

const items = [
  { id: "overview", label: "Overview" },
  { id: "projects", label: "Projects", count: 12 },
]

test("active row has aria-current=page", () => {
  render(<SidebarNav items={items} active="projects" onSelect={() => {}} />)
  const activeRow = screen.getByRole("button", { name: /Projects/ })
  expect(activeRow).toHaveAttribute("aria-current", "page")
})

test("count badge renders", () => {
  render(<SidebarNav items={items} active="projects" onSelect={() => {}} />)
  expect(screen.getByText("12")).toBeInTheDocument()
})

test("clicking inactive row calls onSelect with that id", async () => {
  const onSelect = vi.fn()
  render(<SidebarNav items={items} active="projects" onSelect={onSelect} />)
  await userEvent.click(screen.getByRole("button", { name: /Overview/ }))
  expect(onSelect).toHaveBeenCalledWith("overview")
})
