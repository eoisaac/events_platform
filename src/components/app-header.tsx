'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const AppHeader = () => {
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

        <Button size="lg">Sign in</Button>
      </div>
    </header>
  )
}
