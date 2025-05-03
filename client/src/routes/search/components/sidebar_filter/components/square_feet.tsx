import { Slider } from "@/components/ui/slider";
import { observer } from "@legendapp/state/react";

export const SquareFeet = observer(({squareFeet}) => {
  const ops = squareFeet.options.peek();
  const value = squareFeet.value.get();
  const min = ops[0];
  const max = ops[ops.length - 1];

  return (
    <div>
      <h4 className="font-bold mb-2">Square Feet</h4>
      <Slider
        min={min}
        max={max}
        step={100}
        value={[ value[0], value[1] ]}
        onValueChange={(value) => squareFeet.value.set(value)}
        // className="SliderRoot"
      />
      <div className="flex justify-between mt-2">
        <span>{value[0]} sq ft</span>
        <span>{value[1]} sq ft</span>
      </div>
    </div>
  )
})