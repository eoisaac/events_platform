import { addDays } from 'date-fns'
import { z } from 'zod'

export const eventFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  categoryId: z.string().min(3, 'You must select a category'),
  description: z.string().min(3, 'Description must be at least 20 characters'),
  imageUrl: z.string().url(),
  location: z.string().min(3, 'Location must be at least 3 characters'),
  price: z.coerce.number(),
  isFree: z.boolean(),
  url: z.coerce.string().url().nullable(),
  dateRange: z.object(
    { from: z.coerce.date(), to: z.coerce.date() },
    { required_error: 'You must select a date range' },
  ),
})

export type EventFormValues = z.infer<typeof eventFormSchema>

export const eventFormDefaultValues: EventFormValues = {
  name: '',
  categoryId: '',
  description: '',
  imageUrl: '',
  location: '',
  price: 0,
  isFree: false,
  url: '',
  dateRange: { from: new Date(), to: addDays(new Date(), 0) },
}
