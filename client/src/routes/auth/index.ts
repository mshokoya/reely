import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../root'
import { CognitoAuth } from './cognito_auth'
import { Login } from './login'

export const cognitoAuthRoute = createRoute({
  validateSearch: (search: Record<string, unknown>) => ({
    code: search.code,
    state: search.state,
  }),
  getParentRoute: () => rootRoute,
  path: '/auth/authorize',
  component: CognitoAuth,
})

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: Login,
})
