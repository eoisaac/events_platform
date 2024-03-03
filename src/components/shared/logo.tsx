import { cn } from '@/libs/utils'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'primary' | 'grayscale'
  className?: string
}

export const Logo = ({ variant = 'primary', className }: LogoProps) => {
  return (
    <Link href="/">
      <h2
        className={cn(
          'inline-flex items-center gap-1',
          { grayscale: variant === 'grayscale' },
          className,
        )}
      >
        <Image
          src="/assets/favicon.ico"
          alt="Evently Logo"
          width={30}
          height={30}
        />
        <span className="text-xl font-semibold leading-none">Evently</span>
      </h2>
    </Link>
  )
}
