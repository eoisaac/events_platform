import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="page dotted-page grid place-items-center">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-center text-xl font-bold">Oops! Page not found!</h3>
        <p className="mx-auto w-full max-w-md text-muted-foreground">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button asChild className="self-center">
          <Link href="/">Return to home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
