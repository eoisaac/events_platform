import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { NewCategoryDialogForm } from './forms/new-category-dialog-form'

interface EventCategorySelectProps {
  value?: string
  onChange: (value: string) => void
}

export const EventCategorySelect = (props: EventCategorySelectProps) => {
  // TODO: get categories from database
  return (
    <Select onValueChange={props.onChange} defaultValue={props.value}>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="ai">AI</SelectItem>
          <SelectItem value="frontend">Frontend</SelectItem>
          <SelectItem value="reactjs">ReactJS</SelectItem>
          <SelectItem value="nextjs">NextJS</SelectItem>
        </SelectGroup>
        <SelectGroup className="mt-4">
          <NewCategoryDialogForm />
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
