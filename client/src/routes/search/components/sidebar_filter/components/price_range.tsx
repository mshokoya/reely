import { Slider } from "@/components/ui/slider";
import { observer } from "@legendapp/state/react";

export const PriceRange = observer(({priceRange}) => {
  const opts = priceRange.options.peek();
  const value = priceRange.value.get();
  const min = opts[0];
  const max = opts[opts.length - 1]

  return (
    <div>
      <h4 className="font-bold mb-2">Price Range (Monthly)</h4>
      <Slider
        color="#3FB1CE"
        className="[&>.bar]:bg-green"
        min={min}
        max={max}
        step={100}
        value={[ 
          value[0] || min, 
          value[1] || max
        ]}
        onValueChange={(value: [number, number]) => {
          priceRange.value.set(value)
        }}
      />
      <div className="flex justify-between mt-2">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  )
})