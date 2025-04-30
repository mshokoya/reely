import { redirect } from '@tanstack/react-router'
import { useAuth } from '../../core/providers/auth/auth_context'

// this route is used to redirect users to correct dashboard (manager or tenant) 
export const Dashboard = () => {
  const { user } = useAuth()
  if (!user) {
    redirect({ to: '/' })
  } else {
    if (user.userType.includes('manager')) {
      redirect({ to: '/manager' })
    } else {
      redirect({ to: '/tenant' })
    }
  }

  return (
    <div>Redirecting to dashboard</div>
  )
}