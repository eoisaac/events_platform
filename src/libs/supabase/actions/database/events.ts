import { TablesInsert } from '@/@types/supabase'
import { createClient } from '@/libs/supabase/client'

export const createEvent = async (data: TablesInsert<'events'>) => {
  const supabase = createClient()
  return await supabase.from('events').insert([data])
}

export const getAllEvents = async () => {
  const supabase = createClient()
  return await supabase.from('events').select()
}

export const getUserEvents = async (userId: string) => {
  const supabase = createClient()
  return await supabase.from('events').select().eq('user_id', userId)
}
