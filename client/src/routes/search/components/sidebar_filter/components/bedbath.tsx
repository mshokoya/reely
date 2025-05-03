import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { observer } from "@legendapp/state/react";

export const BedBath = observer(({beds, baths}) => {
  const bedValue = beds.value.get();
  const bathValue = baths.value.get();

  return (
    <div className="flex gap-4">
    <div className="flex-1">
      <h4 className="font-bold mb-2">Beds</h4>
      <Select
        value={bedValue.toString()}
        onValueChange={(value) => beds.value.set(parseInt(value)) }
      >
        <SelectTrigger className="w-full rounded-xl">
          <SelectValue placeholder="Beds" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Any beds</SelectItem>
          <SelectItem value="1">1+ bed</SelectItem>
          <SelectItem value="2">2+ beds</SelectItem>
          <SelectItem value="3">3+ beds</SelectItem>
          <SelectItem value="4">4+ beds</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="flex-1">
      <h4 className="font-bold mb-2">Baths</h4>
      <Select
        value={bathValue.toString()}
        onValueChange={(value) => baths.value.set(parseInt(value))}
      >
        <SelectTrigger className="w-full rounded-xl">
          <SelectValue placeholder="Baths" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Any baths</SelectItem>
          <SelectItem value="1">1+ bath</SelectItem>
          <SelectItem value="2">2+ baths</SelectItem>
          <SelectItem value="3">3+ baths</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
  )
})