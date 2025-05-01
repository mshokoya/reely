import searchFilter from "@/hooks/useSearchFilter"
import { observer } from "@legendapp/state/react"
import { Price } from "./components/price_filter"
import { BedBath } from "./components/bed_bath_filter"
import { PropertyType } from "./components/property_type_filter"
import { Amenities } from "./components/amenities_filter"
import { SquareFeet } from "./components/square_feet_filter"
import { YearBuilt } from "./components/year_built_filter"
import { Sort } from "./components/sort_filter"

export const TOP_FILTER_HEIGHT = '30px'

const search = searchFilter()

export const TopFilter = observer(() => {
  const handleLocationSearch = () => {
    console.log('search location')
  }

  return (
    <div className="flex justify-between" style={{height: TOP_FILTER_HEIGHT}}>
      <button onClick={search.filter.openFilter.toggle}>All Filters</button>
      
      <div>
        <input placeholder="Search location" value={search.filter.location.get()} onChange={(e) => {search.filter.location.set(e.target.value)}} />
        <button onClick={handleLocationSearch}>S</button>
      </div>

      <Price />
      <BedBath />
      <PropertyType />
      <Amenities />
      <SquareFeet />
      <YearBuilt />
      <Sort />

      {/* <div className="flex">
        <button>Reset</button>
        <Separator />
        <button>Apply</button>
      </div> */}
    </div>
  )
})




