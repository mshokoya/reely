
import { SIDEBAR_OPEN_WIDTH, SIDEBAR_CLOSED_WIDTH } from "@/core/util";
import useSearchFilter from "@/hooks/useSearchFilter"
import { observer } from "@legendapp/state/react"
import { PriceRange } from "./components/price_range";
import { PropertyType } from "./components/property_type";
import { Amenities } from "./components/amenities";
import { BedBath } from "./components/bedbath";
import { SquareFeet } from "./components/square_feet";

export const SidebarFilter = observer(() => {
  const search = useSearchFilter();
  const width = `${search.filter.openFilter.get() ? SIDEBAR_CLOSED_WIDTH : SIDEBAR_OPEN_WIDTH }`;
  const display = `${search.filter.openFilter.get() ? 'none' : 'block'}`;
  
  return (
    <div className='absolute top-0 bottom-0 left-0 z-1 bg-amber-300 overflow-y-scroll p-5' style={{width, display}}>
      <div className='flex flex-col gap-7'>
        <PriceRange priceRange={search.filter.priceRange} />
        <PropertyType propertyType={search.filter.propertyType} />
        <Amenities amenities={search.filter.amenities} />
        <BedBath beds={search.filter.beds} baths={search.filter.baths} />
        <SquareFeet squareFeet={search.filter.squareFeet} />
      </div>
    </div>
  )
})






