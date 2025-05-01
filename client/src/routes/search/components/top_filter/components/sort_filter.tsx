import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import useSearchFilter from "@/hooks/useSearchFilter"
import { observer } from "@legendapp/state/react"

export const Sort = observer(() => {
  const search = useSearchFilter()
  const sort = search.filter.sort.get();
  
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Newest" />
      </SelectTrigger>
      <SelectContent>
        { sort.options.map((s, idx) => <SelectItem key={idx} value={s}>{s}</SelectItem>) }
      </SelectContent>
    </Select>
  )
})