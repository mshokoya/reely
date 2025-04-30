import { observer, useObservable } from "@legendapp/state/react"
import useSearchFilter from "@/hooks/useSearchFilter"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export const YearBuilt = observer(() => {
  const filter = useSearchFilter();
  const yearBuilt = filter.yearBuilt.get()
  const yearsInput = useObservable([0,0])

  const handleOnBlur = (evt: React.FocusEvent<HTMLInputElement, Element>, side: 'left' | 'right') => {
    const val = parseInt(evt.target.value)
  
    if (side === 'left') {
      return val > yearBuilt[1]
      ? (// @ts-expect-error - this is a bug in the library yearBuilt[0] is observable/proxy, you must chage to plane number
        yearsInput[0].set(parseInt(yearBuilt[0])) 
      ) : ( filter.yearBuilt[0].set(val) )
    } else {
      return val < yearBuilt[0]
        ? (// @ts-expect-error - this is a bug in the library yearBuilt[0] is observable/proxy, you must chage to plane number
          yearsInput[1].set(parseInt(yearBuilt[1]))
        ) : ( filter.yearBuilt[1].set(val) )
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Year Built</DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='flex p-3'>
          <Input className='w-[7rem]' type='number' value={yearsInput[0].get()} maxLength={4} onBlur={(e) => handleOnBlur(e, 'left')} onChange={(e) => yearsInput[0].set(parseInt(e.target.value))} />
          -
          <Input className='w-[7rem]' type='number' value={yearsInput[1].get()} maxLength={4} onBlur={(e) => handleOnBlur(e, 'right')} onChange={(e) => yearsInput[1].set(parseInt(e.target.value))} />
        </div>        
      </DropdownMenuContent>
    </DropdownMenu>
  )
})