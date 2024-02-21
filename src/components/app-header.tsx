'use client'

import { Button } from '@/components/ui/button'
import { UserMenu } from '@/components/user-menu'
import { cn } from '@/libs/utils'
import { User } from '@supabase/supabase-js'
import Image from 'next/image'
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
        'fixed inset-x-0 top-0 h-16 border-b border-b-transparent transition-all duration-100 ease-in-out',
        { 'border-b-border bg-background shadow-sm': isScrolling },
      )}
    >
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>

        {user ? (
          <UserMenu user={user} />
        ) : (
          <Button asChild>
            <Link href="auth/sign-in">Sign in</Link>
          </Button>
        )}
      </div>
    </header>
  )
}
