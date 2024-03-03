import { EventForm } from '@/components/forms/event-form'
import { getEvent } from '@/libs/supabase/actions/database/events'
import { createClient } from '@/libs/supabase/server'

interface UpdateEventPageProps {
  params: { id: string }
}

const UpdateEventPage = async ({ params: { id } }: UpdateEventPageProps) => {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser()

  const { data: event } = await getEvent(id)

  return (
    <section className="page dotted-page">
      <h3 className="wrapper text-center text-3xl font-bold sm:text-left">
        Update event
      </h3>

      <div className="wrapper my-8">
        <EventForm type="UPDATE" userId={data.user!.id} event={event} />
      </div>
    </section>
  )
}

export default UpdateEventPage
