'use client'

import {
  NewCategoryFormValues,
  newCategoryFormSchema,
} from '@/components/forms/validation/new-category-form-validation'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export const NewCategoryDialogForm = () => {
  const [isOpened, setIsOpened] = React.useState(false)

  const form = useForm<NewCategoryFormValues>({
    resolver: zodResolver(newCategoryFormSchema),
    defaultValues: { name: '' },
  })
  const formId = React.useId()

  const handleOpenChange = (open: boolean) => setIsOpened(open)

  const handleSubmit = (values: NewCategoryFormValues) => {
    console.log(values)
    form.reset()
    handleOpenChange(false)
  }

  return (
    <AlertDialog open={isOpened} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger asChild>
        <Button className="w-full">Add new category</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>New Category</AlertDialogTitle>
          <AlertDialogDescription>
            Add a new category to the list
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form
            id={formId}
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Category name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button form={formId}>Add</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}