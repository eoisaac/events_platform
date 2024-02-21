'use client'

import { appRoutes } from '@/constants/app-routes'
import { cn } from '@/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface AppNavProps {
  onLinkClick?: () => void
}

export const AppNav = ({ onLinkClick }: AppNavProps) => {
  const pathname = usePathname()

  const handleLinkClick = () => onLinkClick?.()

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
            <Link href={link.path} onClick={handleLinkClick}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
