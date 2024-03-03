import { LayoutProps } from '@/@types/layout'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/libs/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently is a platform for creating and managing events!',
  icons: { icon: '/assets/favicon.ico' },
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" className="">
      <body className={cn('bg-background', poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
