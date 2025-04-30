import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useSearchFilter from "@/hooks/useSearchFilter";
import { observer } from "@legendapp/state/react";

export const PropertyType = observer(() => {
  const filter = useSearchFilter();
  const propertyType = filter.propertyType.get()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Property Type</DropdownMenuTrigger>
      <DropdownMenuContent>
        {
            propertyType.options.map((opt, idx) => (
              <div>
                <Checkbox 
                  checked={propertyType.value.includes(opt)} 
                  onCheckedChange={(checked) => {
                    return checked
                      ? filter.propertyType.value.push(opt)
                      : filter.propertyType.value.set((v) => v.filter((v) => v !== opt))
                  }}
                  key={idx}/>
                  {opt}
              </div>
            ))
          }
      </DropdownMenuContent>
    </DropdownMenu>
  )
})