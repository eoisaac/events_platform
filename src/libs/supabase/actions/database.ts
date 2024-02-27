import { createClient } from '../client'

export const createCategory = async () => {
  const supabase = createClient()
  const data = await supabase
    .from('categories')
    .insert([{ name: 'New Category' }])
  console.log(data)
}

export const getCategories = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.from('categories').select()
  console.log(data, error)
}
