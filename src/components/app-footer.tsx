import { Logo } from '@/components/shared/logo'

export const AppFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-50 border-t">
      <div className="wrapper flex flex-col items-center justify-between gap-4 p-5 text-center sm:flex-row">
        <Logo variant="grayscale" />
        <p className="text-sm text-muted-foreground">
          <span>{currentYear} </span>
          <span>Evently &copy;. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}
