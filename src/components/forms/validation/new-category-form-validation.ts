import { z } from 'zod'

export const newCategoryFormSchema = z.object({
  name: z.string().min(3, {
    message: 'Category name must be at least 3 characters long',
  }),
})

export type NewCategoryFormValues = z.infer<typeof newCategoryFormSchema>
