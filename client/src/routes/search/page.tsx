import { SIDEBAR_HEIGHT, VIEW_HEIGHT } from "@/core/util"
import { TopFilter, TOP_FILTER_HEIGHT} from "./components/top_filter";
import { SidebarFilter } from "./components/sidebar_filter";
import { Listings } from "./components/Listings";

export const Search = () => {
  return (
    <Layout>
      <div className=''>
        fljsdjdp
      </div>
    </Layout>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-green-300" style={{ height: VIEW_HEIGHT }}>
      <TopFilter />
      <div className="flex" style={{height: `calc(100vh - ${TOP_FILTER_HEIGHT} - ${ SIDEBAR_HEIGHT})`}}>
        <SidebarFilter />
        <div className="basis-full">
        {children}
        </div>
        <Listings />
      </div>
    </div>
  )
}