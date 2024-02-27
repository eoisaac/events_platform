'use client'

import { Button } from '@/components/ui/button'
import { getCategories } from '@/libs/supabase/actions/database'

export const TestCreate = () => {
  return <Button onClick={() => getCategories()}>Create test</Button>
}
