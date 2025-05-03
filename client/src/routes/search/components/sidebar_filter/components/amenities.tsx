import { Label } from "@/components/ui/label";
import { AmenityIcons } from "@/core/util";
import { cn } from "@/lib/utils";
import { observer } from "@legendapp/state/react";

export const Amenities = observer(({amenities}) => {
  const value = amenities.value.get();
  return (
    <div>
      <h4 className="font-bold mb-2">Amenities</h4>
      <div className="flex flex-wrap gap-2">
        {Object.entries(AmenityIcons).map(([amenity, Icon]) => (
          <div
            key={amenity}
            className={cn(
              "flex items-center space-x-2 p-2 border rounded-lg hover:cursor-pointer",
              value.includes(amenity) ? "border-black" : "border-gray-200"
            )}
            onClick={() => 
              value.includes(amenity) 
                ? amenities.value.set(value.filter((a: string) => a !== amenity))
                : amenities.value.push(amenity) // amenities.value.set([...value, amenity])
            }
          >
            <Icon className="w-5 h-5 hover:cursor-pointer" />
            <Label className="hover:cursor-pointer">
              {formatEnumString(amenity)}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
})

function formatEnumString(str: string) {
  return str.replace(/([A-Z])/g, " $1").trim();
}