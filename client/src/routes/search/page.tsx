import { VIEW_HEIGHT } from "@/core/util"
import { TopFilter } from "./components/top_filter";
import { SidebarFilter } from "./components/sidebar_filter";

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
      <div className="flex h-full">
        <SidebarFilter />
        <div className="basis-full">
        {children}
        </div>
      </div>
    </div>
  )
}