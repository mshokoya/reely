import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../root'

function component() {
  return <div>Signup</div>
}

export const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/signup',
  component
})