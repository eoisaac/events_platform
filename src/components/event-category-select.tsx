import { Tables } from '@/@types/supabase'
import { NewCategoryDialogForm } from '@/components/forms/new-category-dialog-form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getCategories } from '@/libs/supabase/actions/database/categories'
import React from 'react'

interface EventCategorySelectProps {
  value?: string
  onChange: (value: string) => void
}

export const EventCategorySelect = (props: EventCategorySelectProps) => {
  const [categories, setCategories] = React.useState<Tables<'categories'>[]>([])

  const handleGetCategories = async () => {
    const { data } = await getCategories()
    setCategories(data || [])
  }

  React.useEffect(() => {
    handleGetCategories()
  }, [])

  return (
    <Select onValueChange={props.onChange} defaultValue={props.value}>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup className="mt-4">
          <NewCategoryDialogForm onCategoryCreated={handleGetCategories} />
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
