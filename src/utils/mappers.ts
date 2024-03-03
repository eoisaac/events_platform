import { Tables, TablesInsert } from '@/@types/supabase'
import { EventFormValues } from '@/components/forms/validation/event-form-validation'

export const mapFormSchemaToEventSchema = (
  schema: EventFormValues,
  userId: string,
): TablesInsert<'events'> => ({
  category_id: schema.categoryId,
  is_free: schema.isFree,
  end_date: schema.dateRange.to.toISOString(),
  start_date: schema.dateRange.from.toISOString(),
  name: schema.name,
  price: schema.price,
  location: schema.location,
  description: schema.description,
  url: schema.url,
  image_url: schema.imageUrl,
  created_by: userId,
})

export const mapEventSchemaToFormSchema = (
  schema: Tables<'events'>,
): EventFormValues => ({
  categoryId: schema.category_id,
  isFree: schema.is_free,
  dateRange: {
    from: new Date(schema.start_date),
    to: new Date(schema.end_date),
  },
  name: schema.name,
  price: schema.price,
  location: schema.location,
  description: schema.description,
  url: schema.url,
  imageUrl: schema.image_url,
})
