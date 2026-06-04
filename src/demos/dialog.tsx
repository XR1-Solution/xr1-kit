import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogDemo() {
  const [open, setOpen] = useState(false)
  return (
    <section data-testid="demo-dialog" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">dialog</h2>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost">open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>deploy?</DialogTitle>
            <DialogDescription>
              This will push atlas-core v2.4.1 to production. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>cancel</Button>
            <Button onClick={() => setOpen(false)}>deploy ❯</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
