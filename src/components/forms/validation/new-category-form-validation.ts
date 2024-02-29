import { z } from 'zod'

export const newCategoryFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Category name must be at least 2 characters long',
  }),
})

export type NewCategoryFormValues = z.infer<typeof newCategoryFormSchema>
