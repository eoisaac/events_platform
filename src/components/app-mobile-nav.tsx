'use client'

import { AppNav } from '@/components/app-nav'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignRightIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const AppMobileNav = () => {
  const [isOpened, setIsOpened] = React.useState(false)

  const handleOpenChange = (open: boolean) => setIsOpened(open)
  const handleClose = () => setIsOpened(false)

  return (
    <nav className="md:hidden">
      <Sheet open={isOpened} onOpenChange={handleOpenChange}>
        <SheetTrigger className="align-middle">
          <AlignRightIcon className="text-muted-foreground" />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 px-4 pt-0 md:hidden">
          <div className="flex h-16 items-center justify-between">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={128}
              height={38}
            />
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <XIcon className="text-muted-foreground" />
              </Button>
            </SheetClose>
          </div>
          <Separator className="border border-gray-50" />

          <AppNav onLinkClick={handleClose} />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
