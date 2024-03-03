'use client'

import { AppMobileNav } from '@/components/app-mobile-nav'
import { AppNav } from '@/components/app-nav'
import { Logo } from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { UserMenu } from '@/components/user-menu'
import { cn } from '@/libs/utils'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'
import React from 'react'

interface AppHeaderProps {
  user: User | null
}

export const AppHeader = ({ user }: AppHeaderProps) => {
  const [isScrolling, setIsScrolling] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = () => setIsScrolling(window.scrollY > 0)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-16 border-b border-b-transparent transition-all duration-100 ease-in-out',
        { 'border-b-border bg-background shadow-sm': isScrolling },
      )}
    >
      <div className="wrapper flex items-center justify-between">
        <Logo />

        {user && (
          <nav className="hidden max-w-xs flex-1 md:flex">
            <AppNav />
          </nav>
        )}

        <div className="flex w-32 justify-end gap-3">
          {user ? (
            <div className="flex-center inline-flex gap-6">
              <UserMenu user={user} />
              <AppMobileNav />
            </div>
          ) : (
            <Button asChild>
              <Link href="auth/sign-in">Sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
