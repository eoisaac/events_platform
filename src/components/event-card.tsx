import { Tables } from '@/@types/supabase'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { User } from '@supabase/supabase-js'
import { format } from 'date-fns'
import { SquarePenIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DeleteEventDialog } from './delete-event-dialog'

interface EventCardProps {
  event: Tables<'events'>
  user?: User | null
}

export const EventCard = ({ event, user }: EventCardProps) => {
  const displayEditorMenu = user?.id === event.created_by

  return (
    <li className="group h-min w-full sm:max-w-xs">
      <Card className="relative flex min-h-80 w-full flex-col justify-between overflow-hidden p-0">
        {displayEditorMenu && (
          <div className="absolute right-4 top-4 z-20 flex flex-col rounded-sm bg-card opacity-0 transition-all duration-200 group-hover:opacity-100">
            <Button variant="ghost" size="icon" asChild>
              <Link href={`/events/${event.id}/update`}>
                <SquarePenIcon className="h-5 w-5 text-muted-foreground" />
              </Link>
            </Button>
            <DeleteEventDialog />
          </div>
        )}

        <Link href={`/events/${event.id}`} className="relative h-44 w-full">
          <Image
            src={event.image_url}
            alt={`${event.name} image`}
            className="object-cover object-center"
            fill
          />
        </Link>

        <CardHeader className="p-0 px-4">
          <CardDescription className="font-semibold text-primary">
            {format(new Date(event.start_date), 'MMM dd, yyyy')}
            {event.end_date && (
              <span>
                <span className="text-muted-foreground"> &gt; </span>
                <span>{format(new Date(event.end_date), 'MMM dd, yyyy')}</span>
              </span>
            )}
          </CardDescription>
          <div>
            <Link href={`/events/${event.id}`} className="relative h-44 w-full">
              <CardTitle className="text-xl">{event.name}</CardTitle>
            </Link>

            <Button
              variant="link"
              size="sm"
              className="h-auto px-0 text-muted-foreground"
            >
              Isaac Santiago {/* TODO: replace with event creator name */}
            </Button>
          </div>
        </CardHeader>
        <CardFooter className="flex-wrap items-center gap-2 p-0 px-4 pb-4">
          <Badge variant="price">
            {event.is_free ? 'FREE' : `$${event.price}`}
          </Badge>
          <Badge variant="secondary">AI</Badge>
        </CardFooter>
      </Card>
    </li>
  )
}
