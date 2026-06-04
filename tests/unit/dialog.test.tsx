import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

test("opens on trigger click", async () => {
  render(
    <Dialog>
      <DialogTrigger>open</DialogTrigger>
      <DialogContent>
        <DialogTitle>deploy?</DialogTitle>
        <DialogDescription>confirm deploy</DialogDescription>
      </DialogContent>
    </Dialog>,
  )
  expect(screen.queryByText("deploy?")).not.toBeInTheDocument()
  await userEvent.click(screen.getByText("open"))
  expect(screen.getByText("deploy?")).toBeInTheDocument()
  expect(screen.getByText("confirm deploy")).toBeInTheDocument()
})
