import AuthLayout from '@/app/components/Layout/AuthLayout'
import LoginForm from '@/app/components/Form/login-form'

export default function Home() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
