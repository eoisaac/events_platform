import { cn } from '@/libs/utils'
import { SquarePenIcon } from 'lucide-react'
import Link from 'next/link'
import { DeleteEventDialog } from './delete-event-dialog'
import { Button } from './ui/button'

interface EventMenuProps {
  eventId: string
  className?: string
}

export const EventMenu = (props: EventMenuProps) => {
  return (
    <div
      className={cn(
        'absolute right-4 top-4 z-20 flex flex-col rounded-sm bg-card opacity-0 transition-all duration-200 group-hover:opacity-100',
        props.className,
      )}
    >
      <Button variant="ghost" size="icon" asChild>
        <Link href={`/events/${props.eventId}/update`}>
          <SquarePenIcon className="h-4 w-4 text-muted-foreground" />
        </Link>
      </Button>
      <DeleteEventDialog eventId={props.eventId} />
    </div>
  )
}
