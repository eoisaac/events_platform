import { Button } from '@/components/ui/button'
import { TestCreate } from '@/test-create'
import { ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = async () => {
  return (
    <>
      <section className="page dotted-page flex">
        <div className="wrapper grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-5xl font-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="text-lg text-muted-foreground">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button asChild className="w-full gap-3 sm:w-fit">
              <Link href="#events">
                <span>Explore Now</span>
                <ChevronDownIcon />
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[60vh] object-contain object-center 2xl:max-h-[46vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper page flex flex-col gap-8 md:gap-12"
      >
        <h2 className="text-4xl font-bold">
          <div>Trust by</div>
          <div>Thousands of Events</div>
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <TestCreate />
        </div>
      </section>
    </>
  )
}

export default HomePage
