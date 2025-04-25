import { createRootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { homeRoute } from './home'
import { loginRoute } from './auth/login'
import { Nav } from '../components/nav'
import { cognitoAuthRoute } from './auth/cognito_auth'
import { managersDashboardRoute } from './managers/dashboard'



export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Nav/>
      <Outlet />
    </>
  )
})

export const rootTree = rootRoute.addChildren([
  managersDashboardRoute,
  homeRoute,
  loginRoute,
  cognitoAuthRoute
])