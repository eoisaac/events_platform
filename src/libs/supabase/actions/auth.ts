'use server'

import { SignInFormValues } from '@/components/forms/validation/sign-in-form-validation'
import { SignUpFormValues } from '@/components/forms/validation/sign-up-form-validation'
import { createClient } from '@/libs/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export const signIn = async (formData: SignInFormValues) => {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword(formData)
  if (error) {
    // TODO: validate and display error message
    // TODO: redirect to send verification email again, ask for email verification
    console.error(error)
    return redirect('/auth/sign-in?message=Could not authenticate user.')
  }

  return redirect('/')
}

export const signUp = async (formData: SignUpFormValues) => {
  const supabase = createClient()
  const origin = headers().get('origin')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { confirmPassword, ...rest } = formData
  const { error } = await supabase.auth.signUp({
    ...rest,
    options: { emailRedirectTo: `${origin}/auth/callback` },
  })
  if (error) {
    console.error(error)
    return redirect('/auth/sign-in?message=Could not authenticate user.')
  }

  return redirect(
    '/auth/sign-in?message=Check email to continue sign in process',
  )
}
