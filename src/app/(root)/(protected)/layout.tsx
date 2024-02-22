import { LayoutProps } from '@/@types/layout'
import { createClient } from '@/libs/supabase/server'
import { redirect } from 'next/navigation'

const ProtectedLayout = async ({ children }: LayoutProps) => {
  const supabase = createClient()

  const { data } = await supabase.auth.getUser()
  return data.user ? <>{children}</> : redirect('/auth/sign-in')
}

export default ProtectedLayout
