import { TablesInsert } from '@/@types/supabase'
import { createClient } from '@/libs/supabase/client'

export const createEvent = async (data: TablesInsert<'events'>) => {
  const supabase = createClient()
  return await supabase.from('events').insert([data])
}

export const updateEvent = async (
  eventId: string,
  data: TablesInsert<'events'>,
) => {
  const supabase = createClient()
  return await supabase.from('events').update(data).eq('id', eventId)
}

export const deleteEvent = async (eventId: string) => {
  const supabase = createClient()
  return await supabase.from('events').delete().eq('id', eventId)
}

export const getAllEvents = async () => {
  const supabase = createClient()
  return await supabase.from('events').select('*')
}

export const getEvent = async (eventId: string) => {
  const supabase = createClient()
  return await supabase.from('events').select().eq('id', eventId).single()
}

export const getUserEvents = async (userId: string) => {
  const supabase = createClient()
  return await supabase.from('events').select().eq('created_by', userId)
}
