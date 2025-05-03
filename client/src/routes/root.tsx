import { createRootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { Nav } from '../components/nav'
import { cognitoAuthRoute, loginRoute } from './auth'
import { managersDashboardRoute } from './managers'
import { homeRoute } from './home'
import { searchRoute } from './search'
import { propertyRoute } from './property'

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
  cognitoAuthRoute,
  searchRoute,
  propertyRoute
])