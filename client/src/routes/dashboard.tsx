import { createRoute, redirect } from '@tanstack/react-router'
import { rootRoute } from './root'
import { useAuth } from '../core/providers/auth/auth_context'

// this route is used to redirect users to correct dashboard (manager or tenant) 
function C() {
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


  // TODO: this rout is to check i Auth middleware is working on backend, remove later
  // useEffectOnce(() => {
  //   fetch('`http://localhost:5000/api/user/me', {
  //     credentials: 'include',
  //   })
  //   .then(res => res.json())
  //   .then((user) => {
      
  //   })
  // }, [])

  return (
    <div>Redirecting to dashboard</div>
  )
  
}

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: C
})