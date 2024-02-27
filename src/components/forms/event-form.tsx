'use client'

import { EventCategorySelect } from '@/components/event-category-select'
import {
  EventFormValues,
  eventFormDefaultValues,
  eventFormSchema,
} from '@/components/forms/validation/event-form-validation'
import { DateRangePicker } from '@/components/shared/date-range-picker'
import { ImageUploaderDropzone } from '@/components/shared/image-uploader-dropzone'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createCategory } from '@/libs/supabase/actions/database'
import { cn } from '@/libs/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { DollarSignIcon, LinkIcon, MapPinIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface EventFormProps {
  type: 'CREATE' | 'UPDATE'
}

export const EventForm = (props: EventFormProps) => {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: eventFormDefaultValues,
  })
  const { formState } = form
  const formAction = props.type === 'CREATE' ? 'Create' : 'Update'

  const isFreeEvent = form.watch('isFree')

  const handleSubmit = async (values: EventFormValues) => {
    console.log(values)

    await createCategory()
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <EventCategorySelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    className="h-48 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <ImageUploaderDropzone
                    onImageChange={field.onChange}
                    imageSrc={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="relative flex w-full items-center">
                    <Input placeholder="Location" className="pl-9" {...field} />
                    <MapPinIcon className="absolute left-3 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <DateRangePicker
                    dateRange={field.value}
                    onSelectDate={field.onChange}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="relative flex w-full items-center">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="relative flex w-full items-center">
                      <Input
                        type="number"
                        placeholder="Price"
                        className={cn('input-number pl-9', {
                          'text-muted-foreground line-through': isFreeEvent,
                        })}
                        disabled={isFreeEvent}
                        {...field}
                      />
                      <DollarSignIcon className="absolute left-3 h-5 w-5 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isFree"
              render={({ field }) => (
                <FormItem className="absolute right-3 min-w-max">
                  <FormControl>
                    <label
                      htmlFor="isFree"
                      className="flex items-center gap-2 text-sm leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <span>Free Ticket</span>
                      <Checkbox
                        onCheckedChange={field.onChange}
                        checked={field.value}
                        id="isFree"
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="relative flex w-full items-center">
                    <Input placeholder="URL" className="pl-9" {...field} />
                    <LinkIcon className="absolute left-3 h-5 w-5 text-muted-foreground" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full self-center"
        >
          {formAction} event
        </Button>
      </form>
    </Form>
  )
}
