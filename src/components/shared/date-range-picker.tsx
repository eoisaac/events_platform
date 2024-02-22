'use client'

import { addDays, format } from 'date-fns'
import { CalendarRangeIcon } from 'lucide-react'
import * as React from 'react'
import { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/libs/utils'

type DateRangeValue = DateRange | undefined
interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  dateRange?: DateRangeValue
  onSelectDate?: (date: DateRangeValue) => void
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const [date, setDate] = React.useState<DateRangeValue>(
    props.dateRange || { from: new Date(), to: addDays(new Date(), 0) },
  )

  const handleOnChange = (date: DateRangeValue) => {
    props.onSelectDate?.(date)
    setDate(date)
  }

  return (
    <div className={cn('grid gap-2', props.className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn('justify-start pl-3 text-left font-normal', {
              'text-muted-foreground': !date,
            })}
          >
            <CalendarRangeIcon className="mr-2 h-5 w-5 text-muted-foreground" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleOnChange}
            // numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
