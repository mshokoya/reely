import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { batch } from "@legendapp/state"
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Popover } from "@radix-ui/react-popover"
import { observer, useObservable } from "@legendapp/state/react"
import useSearchFilter from "@/hooks/useSearchFilter"



export const Price = observer(() => {
  const filter = useSearchFilter();

  const range = filter.priceRange.options.peek().map((e) => e.toString());
  const minPriceRange = useObservable(range);
  const maxPriceRange = useObservable(range);

  const handleSelectMin = (newMinValue: string) => {
    batch(() => {
      const fmtNewMinVal = parseInt(newMinValue)
      filter.priceRange.value[0].set(fmtNewMinVal);
      calcNewMinInMaxField(fmtNewMinVal)
    })
  }

  const handleSelectMax = (e: string) => {
  batch(() => {
    const fmtNewMaxVal = parseInt(e)
    filter.priceRange.value[1].set(fmtNewMaxVal);
    calcNewMaxInMinField(fmtNewMaxVal)
  })
  }

  function calcNewMinInMaxField(newMinPrice: number) {
    const fullOpts = filter.priceRange.options.peek()
    const newMin = fullOpts.findIndex((e) => newMinPrice <= e)
    const i = fullOpts.map(v => v.toString()).slice(newMin, 100)
    maxPriceRange.set(i)
  }

  function calcNewMaxInMinField(price: number) {
    const fullOpts = filter.priceRange.options.peek()
    const newMax = fullOpts.findIndex((e) => price <= e)
    const i = fullOpts.map(v => v.toString()).slice(0, newMax+1)
    minPriceRange.set(i)
  }

  return (
    <Popover>
      <PopoverTrigger>Price</PopoverTrigger>
      <PopoverContent>

        {/* ======= MINIMUM PRICE RANGE ======= */}
        <Select onValueChange={handleSelectMin} defaultValue="No Min" value={filter.priceRange.value.get()[0].toString()}>
          <SelectTrigger>
            <SelectValue placeholder="No Min" />
          </SelectTrigger>
          <SelectContent>
            {
              minPriceRange.get().map(opt => {
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
        <Select onValueChange={handleSelectMax} defaultValue="No Max" value={filter.priceRange.value.get()[1].toString()}>
          <SelectTrigger>
            <SelectValue placeholder="No Max" />
          </SelectTrigger>
          <SelectContent>
          {
              maxPriceRange.get().map(opt => {
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
