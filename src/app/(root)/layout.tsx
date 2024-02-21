import { LayoutProps } from '@/@types/layout'
import { AppFooter } from '@/components/app-footer'
import { AppHeader } from '@/components/app-header'
import { createClient } from '@/libs/supabase/server'

const RootLayout = async ({ children }: Readonly<LayoutProps>) => {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser()

  return (
    <div className="relative flex h-screen flex-col">
      <AppHeader user={data.user} />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter />
    </div>
  )
}

export default RootLayout
