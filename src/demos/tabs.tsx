import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <section data-testid="demo-tabs" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">tabs</h2>
      <Tabs defaultValue="overview" className="max-w-md">
        <TabsList>
          <TabsTrigger value="overview">overview</TabsTrigger>
          <TabsTrigger value="logs">logs</TabsTrigger>
          <TabsTrigger value="settings">settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p className="font-mono text-sm text-fg-2">deployment overview content</p>
        </TabsContent>
        <TabsContent value="logs">
          <p className="font-mono text-sm text-fg-2">build logs here</p>
        </TabsContent>
        <TabsContent value="settings">
          <p className="font-mono text-sm text-fg-2">project settings</p>
        </TabsContent>
      </Tabs>
    </section>
  )
}
