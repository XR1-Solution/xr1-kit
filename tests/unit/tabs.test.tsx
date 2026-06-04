import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

test("first content visible by default, switches on trigger click", async () => {
  render(
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">overview</TabsTrigger>
        <TabsTrigger value="logs">logs</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">overview content</TabsContent>
      <TabsContent value="logs">logs content</TabsContent>
    </Tabs>,
  )
  expect(screen.getByText("overview content")).toBeInTheDocument()
  expect(screen.queryByText("logs content")).not.toBeInTheDocument()
  await userEvent.click(screen.getByRole("tab", { name: "logs" }))
  expect(screen.getByText("logs content")).toBeInTheDocument()
  expect(screen.queryByText("overview content")).not.toBeInTheDocument()
})
