import { EventForm } from '@/components/forms/event-form'
import { createClient } from '@/libs/supabase/server'

const CreateEventPage = async () => {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser()

  return (
    <section className="page dotted-page">
      <h3 className="wrapper text-center text-3xl font-bold sm:text-left">
        Create event
      </h3>

      <div className="wrapper my-8">
        <EventForm type="CREATE" userId={data.user!.id} />
      </div>
    </section>
  )
}

export default CreateEventPage
