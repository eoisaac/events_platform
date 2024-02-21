import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { createClient } from '@/libs/supabase/client'
import { User } from '@supabase/supabase-js'
import { LogOutIcon, UserRoundIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface UserMenuProps {
  user: User
}

export const UserMenu = ({ user }: UserMenuProps) => {
  const supabase = createClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh() // TODO: check if is the best way to update the <UserMenu /> to show the "Sign in" button
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage
            // src={user?.imageUrl}
            // alt={`${user?.}'s avatar`}
            />
            <AvatarFallback>IS</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Manage Account</span>
            <DropdownMenuShortcut>
              <UserRoundIcon className="h-4 w-4 text-muted-foreground" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <span>Sign out</span>
          <DropdownMenuShortcut>
            <LogOutIcon className="h-4 w-4 text-muted-foreground" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
