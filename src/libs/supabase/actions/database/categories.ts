import { TablesInsert } from '@/@types/supabase'
import { createClient } from '@/libs/supabase/client'

export const createCategory = async (data: TablesInsert<'categories'>) => {
  const supabase = createClient()
  return await supabase.from('categories').insert([data])
}

export const getCategories = async () => {
  const supabase = createClient()
  return await supabase.from('categories').select()
}
