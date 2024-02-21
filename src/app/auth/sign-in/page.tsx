import { SignInForm } from '@/components/forms/sign-in-form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

const SignInPage = () => {
  return (
    <>
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>to continue to Evently</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <SignInForm />
        </CardContent>
        <CardFooter className="text-sm">
          <span className="text-muted-foreground">
            Don&apos;t have an account?
          </span>
          <Button variant="link" className="px-2" asChild>
            <Link href="/auth/sign-up" className="text-primary">
              Sign Up
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default SignInPage
