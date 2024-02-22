import { EventForm } from '@/components/forms/event-form'

const CreateEventPage = () => {
  return (
    <section className="page dotted-page">
      <h3 className="wrapper text-center text-3xl font-bold sm:text-left">
        Create event
      </h3>

      <div className="wrapper my-8">
        <EventForm type="CREATE" />
      </div>
    </section>
  )
}

export default CreateEventPage
