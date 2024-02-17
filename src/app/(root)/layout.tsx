import { AppFooter } from '@/components/app-footer'
import { AppHeader } from '@/components/app-header'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <div className="relative flex h-screen flex-col">
      <AppHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter />
    </div>
  )
}

export default RootLayout
