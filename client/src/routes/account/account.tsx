import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Account = () => {
  return (
    <div>
      <aside>
      <Tabs defaultValue="tenant" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="tenant">Account</TabsTrigger>
          <TabsTrigger value="manager">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="tenant"></TabsContent>
        <TabsContent value="manager"></TabsContent>
      </Tabs>
      </aside>
      <section>

      </section>
    </div>
  )
}