import { LayoutProps } from '@/@types/layout'

const AuthLayout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <div className="dotted-page grid min-h-screen place-items-center">
      {children}
    </div>
  )
}

export default AuthLayout
