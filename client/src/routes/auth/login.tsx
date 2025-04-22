import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../root'
import { useAuth } from '../../core/providers/auth/auth_context';

function Component() {
  const {login} = useAuth();

  return (<div onClick={login}>Login</div>)
}

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: Component,
})

