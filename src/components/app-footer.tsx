import Image from 'next/image'
import Link from 'next/link'

export const AppFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-50 border-t">
      <div className="wrapper flex flex-col items-center justify-between gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="block">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            className="grayscale"
            width={100}
            height={10}
          />
        </Link>
        <p className="text-sm text-muted-foreground">
          <span>{currentYear} </span>
          <span>Evently &copy;. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}
