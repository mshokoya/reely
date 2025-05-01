import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { batch } from "@legendapp/state"
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Popover } from "@radix-ui/react-popover"
import { observer, useObservable } from "@legendapp/state/react"
import useSearchFilter from "@/hooks/useSearchFilter"



export const SquareFeet = observer(() => {
  const search = useSearchFilter();

  const range = search.filter.squareFeet.options.peek().map((e) => e.toString());
  const minSqFtRange = useObservable(range);
  const maxSqFtRange = useObservable(range);

  const handleSelectMin = (newMinValue: string) => {
    batch(() => {
      const fmtNewMinVal = parseInt(newMinValue)
      search.filter.squareFeet.value[0].set(fmtNewMinVal);
      calcNewMinInMaxField(fmtNewMinVal)
    })
  }

  const handleSelectMax = (e: string) => {
  batch(() => {
    const fmtNewMaxVal = parseInt(e)
    search.filter.squareFeet.value[1].set(fmtNewMaxVal);
    calcNewMaxInMinField(fmtNewMaxVal)
  })
  }

  function calcNewMinInMaxField(newMinSqFt: number) {
    const fullOpts = search.filter.squareFeet.options.peek()
    const newMin = fullOpts.findIndex((e) => newMinSqFt <= e)
    const i = fullOpts.map(v => v.toString()).slice(newMin, 100)
    maxSqFtRange.set(i)
  }

  function calcNewMaxInMinField(sqft: number) {
    const fullOpts = search.filter.squareFeet.options.peek()
    const newMax = fullOpts.findIndex((e) => sqft <= e)
    const i = fullOpts.map(v => v.toString()).slice(0, newMax+1)
    minSqFtRange.set(i)
  }

  return (
    <Popover>
      <PopoverTrigger>Square Feet</PopoverTrigger>
      <PopoverContent>

        {/* ======= MINIMUM PRICE RANGE ======= */}
        <Select onValueChange={handleSelectMin} defaultValue="No Min" value={search.filter.squareFeet.value.get()[0].toString()}>
          <SelectTrigger>
            <SelectValue placeholder="No Min" />
          </SelectTrigger>
          <SelectContent>
            {
              minSqFtRange.get().map(opt => {
                return (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                )
              })
            }
          </SelectContent>
        </Select>
        {/*  ======= END ======= */}

        {/* ======= MAXIMUM PRICE RANGE ======= */}
        <Select onValueChange={handleSelectMax} defaultValue="No Max" value={search.filter.squareFeet.value.get()[1].toString()}>
          <SelectTrigger>
            <SelectValue placeholder="No Max" />
          </SelectTrigger>
          <SelectContent>
          {
              maxSqFtRange.get().map(opt => {
                return (
                  <SelectItem key={opt} value={opt}>
                    {opt.toString()}
                  </SelectItem>
                )
              })
            }
          </SelectContent>
        </Select>
        {/*  ======= END ======= */}

      </PopoverContent>
    </Popover>
  )
})
