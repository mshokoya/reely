import { PropertyTypeIcons } from "@/core/util";
import { cn } from "@/lib/utils";
import { observer } from "@legendapp/state/react";

export const PropertyType = observer(({propertyType}) => {
  // const opts = propertyType.options.peek();
  const value = propertyType.value.get();

  return (
    <div>
    <h4 className="font-bold mb-2">Property Type</h4>
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(PropertyTypeIcons).map(([type, Icon]) => (
        <div
          key={type}
          className={cn(
            "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer",
            value.includes(type) ? "border-black" : "border-gray-200"
          )}
          onClick={() => 
            value.includes(type)
              ? propertyType.value.set(value.filter(v => v !== type))
              : propertyType.value.set([...value, type])
          }
        >
          <Icon className="w-6 h-6 mb-2" />
          <span>{type}</span>
        </div>
      ))}
    </div>
  </div>
  )
})

