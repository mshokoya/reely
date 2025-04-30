import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useSearchFilter from "@/hooks/useSearchFilter";
import { observer } from "@legendapp/state/react";

export const BedBath = observer(() => {
  const filter = useSearchFilter();

  const bed = filter.beds.get();
  const bath = filter.baths.get();

  const handleBedClick = (e) => {
    const idx = parseInt(e.target.dataset.idx)
    filter.beds.value.set(bed.options[idx])
  }

  const handleBathClick = (e) => {
    const idx = parseInt(e.target.dataset.idx)
    filter.baths.value.set(bath.options[idx])
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Bed/Bath</DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='flex flex-col gap-5 p-3'>
          <div>
            <h1 className='mb-2'>Bedrooms</h1>
            <div onClick={handleBedClick} className="flex border-y-1 rounded-md">
              {
                bed.options.map((e, idx) => 
                  <div
                    data-idx={idx}
                    key={idx}
                    className={`
                      p-3 border-l-1
                      ${bed.value === e ? 'bg-blue-500' : null}
                      ${idx === 0 ? 'rounded-l-md' : null}
                      ${idx === bed.options.length - 1 ? 'border-x-1 rounded-r-md' : null}
                    `}>
                      {idx === 0 ? 'Any': e + '+'}
                    </div>
                )
              }
            </div>
          </div>
          <div>
            <h1 className='mb-2'>Bathrooms</h1>
            <div onClick={handleBathClick} className="flex border-y-1 h-full rounded-md">
            {
                bath.options.map((e, idx) => 
                  <div
                    data-idx={idx}
                    key={idx}
                    className={`
                    p-3 border-l-1
                    ${bath.value === e ? 'bg-blue-500' : null}
                    ${idx === 0 ? 'rounded-l-md' : null}
                    ${idx === bath.options.length - 1 ? 'border-x-1 rounded-r-md' : null}
                  `}>
                    {idx === 0 ? 'Any': e + '+'}
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
})