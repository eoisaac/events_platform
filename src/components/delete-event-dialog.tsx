'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { deleteEvent } from '@/libs/supabase/actions/database/events'
import { Trash2Icon } from 'lucide-react'
import React from 'react'

interface DeleteEventDialogProps {
  eventId: string
}

export const DeleteEventDialog = (props: DeleteEventDialogProps) => {
  const [isOpened, setIsOpened] = React.useState(false)

  const handleOpenChange = (open: boolean) => setIsOpened(open)
  const handleDelete = async () => await deleteEvent(props.eventId)

  return (
    <AlertDialog open={isOpened} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Trash2Icon className="h-4 w-4 text-destructive" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Event</AlertDialogTitle>
          <AlertDialogDescription>
            <div>Are you sure you want to delete this event?</div>
            <div>This action cannot be undone.</div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant="destructive" asChild>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
