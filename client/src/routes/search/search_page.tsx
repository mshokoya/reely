import { VIEW_HEIGHT } from "@/core/util"
import { FilterNav } from "./components/filter_nav"
import { FilterSidebar } from "./components/filter_sidebar"




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
      <FilterNav />
      <div className="flex h-full">
        <FilterSidebar />
        <div className="basis-full">
        {children}
        </div>
      </div>
    </div>
  )
}