import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link, Outlet, useLocation } from "@tanstack/react-router"
import { BrickWall, DownloadCloud, Heart, HouseIcon, PartyPopper, Settings } from "lucide-react"

export const Account = () => {
  const pathname = useLocation().pathname;

  const tenantOpts = [
    {name: 'Favorites', path: '/account/tenant/favorites', icon: Heart},
    {name: 'Applications', path: '/account/tenant/applications', icon: DownloadCloud},
    {name: 'Residences', path: '/account/tenant/residences', icon: HouseIcon},
    {name: 'Billing History', path: '/account/billing', icon: BrickWall},
    {name: 'Payment Methods', path: '/account/payment', icon: PartyPopper},
    {name: 'Settings', path: '/account/settings', icon: Settings},
  ]

  const managerOpts = [
    {name: 'Properties', path: '/account/manager/properties', icon: Heart},
    {name: 'Applications', path: '/account/manager/applications', icon: DownloadCloud},
    {name: 'Tenants', path: '/account/tenant/leases', icon: HouseIcon},
    {name: 'Billing History', path: '/account/billing', icon: BrickWall},
    {name: 'Payment Methods', path: '/account/payment', icon: PartyPopper},
    {name: 'Settings', path: '/account/settings', icon: Settings},
  ]

  return (
    <div className='flex'>
      <aside className='w-1/7'>
        <Tabs defaultValue="tenant">
          <TabsList>
            <TabsTrigger value="tenant">Tenant</TabsTrigger>
            <TabsTrigger value="manager">Manager</TabsTrigger>
          </TabsList>
          <TabsContent value="tenant">
            <ul>
              { tenantOpts.map((opt) => (
                  <li key={opt.name} style={{
                    
                    // display: 'inline-block',
                    color: opt.path === pathname ? 'white' : '',
                    backgroundColor: opt.path === pathname ? 'black' : '',
                  }}> 
                    <Link className='flex gap-3 p-3' to={opt.path}> <opt.icon /> {opt.name} </Link> 
                  </li>
                ))
              }
            </ul>
          </TabsContent>
          <TabsContent value="manager">
            <ul>
              { managerOpts.map((opt) => (
                  <li key={opt.name} style={{
                    color: opt.path === pathname ? 'white' : '',
                    backgroundColor: opt.path === pathname ? 'black' : '',
                  }}> 
                    <Link className='flex gap-3 p-3' to={opt.path}> <opt.icon /> {opt.name} </Link> 
                  </li>
                ))
              }
            </ul>
          </TabsContent>
        </Tabs>
      </aside>
      <section className="basis">
        <Outlet />
      </section>
    </div>
  )
}