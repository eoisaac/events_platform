import { EventMenu } from '@/components/event-menu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getEvent } from '@/libs/supabase/actions/database/events'
import { createClient } from '@/libs/supabase/server'
import { format } from 'date-fns'
import { CalendarRangeIcon, LinkIcon, MapPinIcon } from 'lucide-react'
import Image from 'next/image'

interface EventPageProps {
  params: { id: string }
}

const EventPage = async ({ params: { id } }: EventPageProps) => {
  const { data: event } = await getEvent(id)
  if (!event) return null

  const supabase = createClient()
  const { data: auth } = await supabase.auth.getUser()
  const displayEventMenu = auth.user?.id === event.created_by

  return (
    <section className="page dotted-page flex flex-col">
      <div className="wrapper relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        {displayEventMenu && (
          <EventMenu eventId={event.id} className="opacity-100" />
        )}

        <Image
          src={event.image_url}
          alt={`${event.name} image`}
          width={1000}
          height={1000}
          className="z-10 h-full rounded-md object-cover object-center shadow-md"
        />

        <div className="flex flex-1 flex-col gap-4 md:mt-12">
          <h3 className="text-3xl font-bold">{event.name}</h3>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="price" className="px-3">
              {event.is_free ? 'FREE' : `$${event.price}`}
            </Badge>
            <Badge variant="secondary" className="px-3">
              AI
            </Badge>

            <div className="ml-2">
              <span className="text-xs">by </span>
              <span className="font-medium text-muted-foreground">
                Isaac Santiago {/* TODO: replace with event creator name */}
              </span>
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-3 text-sm">
            <CalendarRangeIcon className="h-5 w-5 text-tertiary" />

            <div className="font-medium">
              {format(new Date(event.start_date), 'MMM dd, yyyy')}
              {event.end_date && (
                <span>
                  <span className="text-muted-foreground"> &gt; </span>
                  <span>
                    {format(new Date(event.end_date), 'MMM dd, yyyy')}
                  </span>
                </span>
              )}
            </div>
          </div>

          <div className="inline-flex items-center gap-3 text-sm">
            <MapPinIcon className="h-5 w-5 text-tertiary" />
            <div className="font-medium">{event.location}</div>
          </div>

          <p className="mt-4 text-muted-foreground">{event.description}</p>

          {event.url && (
            <div className="inline-flex items-center gap-3">
              <LinkIcon className="h-6 w-6 text-tertiary" />
              <Button
                variant="link"
                className="h-auto px-0 font-medium text-foreground"
                asChild
              >
                <a href={event.url} target="_blank" rel="noreferrer">
                  {event.url}
                </a>
              </Button>
            </div>
          )}
          <Button className="mt-auto">Get ticket</Button>
        </div>
      </div>

      <div className="wrapper md:mt-20">
        <h3 className="text-3xl font-bold">Related events</h3>

        <ul></ul>
      </div>
    </section>
  )
}

export default EventPage
