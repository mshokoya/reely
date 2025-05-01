import searchFilter from "@/hooks/useSearchFilter"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@radix-ui/react-separator"
import { observer } from "@legendapp/state/react"
import { Price } from "./components/price_filter"
import { BedBath } from "./components/bed_bath_filter"
import { PropertyType } from "./components/property_type_filter"
import { Amenities } from "./components/amenities_filter"
import { SquareFeet } from "./components/square_feet_filter"
import { YearBuilt } from "./components/year_built_filter"
import { Select } from "@/components/ui/select"
import { Sort } from "./components/sort_filter"


const filter = searchFilter()

export const TopFilter = observer(() => {
  const handleLocationSearch = () => {
    console.log('search location')
  }

  return (
    <div className="flex justify-between">
      <button onClick={filter.openFilter.toggle}>All Filters</button>
      
      <div>
        <input placeholder="Search location" value={filter.location.get()} onChange={(e) => {filter.location.set(e.target.value)}} />
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




