import { SIDEBAR_OPEN_WIDTH, SIDEBAR_CLOSED_WIDTH } from "@/core/util";
import useSearchFilter from "@/hooks/useSearchFilter"
import { observer } from "@legendapp/state/react"

export const FilterSidebar = observer(() => {
  const filter = useSearchFilter();
  const width = `${filter.openFilter.get() ? SIDEBAR_CLOSED_WIDTH : SIDEBAR_OPEN_WIDTH }`;
  const display = `${filter.openFilter.get() ? 'none' : 'block'}`;
  
  return (
    <div style={{width, display}}>
      <h1>Property Type</h1>
      <h1>Application</h1>
      <h1>Convenience</h1>
    </div>
  )
})