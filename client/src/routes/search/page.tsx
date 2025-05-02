import { SIDEBAR_HEIGHT, VIEW_HEIGHT } from "@/core/util"
import { TopFilter, TOP_FILTER_HEIGHT} from "./components/top_filter";
import { SidebarFilter } from "./components/sidebar_filter";
import { Listings } from "./components/listings";
import { Map } from "./components/map";
import { observer } from "@legendapp/state/react";

export const Search = observer(() => {
  return (
    <Layout>
      <div className='w-full h-full p-3'>
        <Map />
      </div>
    </Layout>
  )
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-green-300" style={{ height: VIEW_HEIGHT }}>
      <TopFilter />
      <div className="flex relative" style={{height: `calc(100vh - ${TOP_FILTER_HEIGHT} - ${ SIDEBAR_HEIGHT})`}}>
        <SidebarFilter />
        <div className="basis-full z-0">
        {children}
        </div>
        <Listings />
      </div>
    </div>
  )
}