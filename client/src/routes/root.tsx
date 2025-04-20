import { createRootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { homeRoute } from './home'
import { loginRoute } from './auth/login'
import { signupRoute } from './auth/signup'
import { Nav } from '../components/nav'


export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Nav/>
      <Outlet />
    </>
  )
})

export const rootTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  signupRoute,
])