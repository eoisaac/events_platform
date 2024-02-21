'use client'

import { appRoutes } from '@/constants/app-routes'
import { cn } from '@/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const AppNav = () => {
  const pathname = usePathname()

  return (
    <ul className="flex w-full flex-col items-start gap-5 md:flex-row md:justify-between">
      {appRoutes.map((link) => {
        const isActive = pathname === link.path
        return (
          <li
            key={link.path}
            className={cn('text-md whitespace-nowrap text-muted-foreground', {
              'text-primary': isActive,
            })}
          >
            <Link href={link.path}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
