import { render, screen } from "@testing-library/react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

test("renders fallback text when no image src", () => {
  render(
    <Avatar>
      <AvatarFallback>jd</AvatarFallback>
    </Avatar>,
  )
  expect(screen.getByText("jd")).toBeInTheDocument()
})

test("avatar root has square tile classes", () => {
  render(
    <Avatar data-testid="av">
      <AvatarFallback>ab</AvatarFallback>
    </Avatar>,
  )
  const root = screen.getByTestId("av")
  expect(root.className).toContain("rounded-sm")
  expect(root.className).toContain("bg-bg-3")
})

test("AvatarImage component renders without error", () => {
  const { container } = render(
    <Avatar>
      <AvatarImage src="https://example.com/avatar.png" alt="user avatar" />
      <AvatarFallback>u</AvatarFallback>
    </Avatar>,
  )
  // Radix Avatar always renders the root span
  expect(container.firstChild).toBeInTheDocument()
})
