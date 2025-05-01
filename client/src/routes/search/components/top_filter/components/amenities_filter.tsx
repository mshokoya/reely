import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useSearchFilter from "@/hooks/useSearchFilter";
import { observer } from "@legendapp/state/react";

export const Amenities = observer(() => {
  const search = useSearchFilter();
  const amenities = search.filter.amenities.get()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Amenities</DropdownMenuTrigger>
      <DropdownMenuContent>
        {
            amenities.options.map((opt, idx) => (
              <div>
                <Checkbox 
                  checked={amenities.value.includes(opt)} 
                  onCheckedChange={(checked) => {
                    return checked
                      ? search.filter.amenities.value.push(opt)
                      : search.filter.amenities.value.set((v) => v.filter((v) => v !== opt))
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