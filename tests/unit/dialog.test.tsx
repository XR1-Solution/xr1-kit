import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"

test("opens on trigger click", async () => {
  render(
    <Dialog>
      <DialogTrigger>open</DialogTrigger>
      <DialogContent><DialogTitle>deploy?</DialogTitle></DialogContent>
    </Dialog>,
  )
  expect(screen.queryByText("deploy?")).not.toBeInTheDocument()
  await userEvent.click(screen.getByText("open"))
  expect(screen.getByText("deploy?")).toBeInTheDocument()
})
