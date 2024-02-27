import { createClient } from '@/libs/supabase/client'
import { createId } from '@paralleldrive/cuid2'

export const uploadEventImage = async (image: File) => {
  const supabase = createClient()

  const fileExt = image.name.split('.').pop()
  const { data, error } = await supabase.storage
    .from('event-images')
    .upload(`event_img_${createId()}.${fileExt}`, image)

  if (error) {
    console.error('Error uploading image:', error)
    throw new Error('Error uploading image')
  }

  return data.path
}

export const getEventImageUrl = (path: string) => {
  const supabase = createClient()
  const { data } = supabase.storage.from('event-images').getPublicUrl(path)
  return data.publicUrl
}
