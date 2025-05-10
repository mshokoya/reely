import { createRootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { Nav } from '../components/nav'
import { cognitoAuthRoute, loginRoute } from './auth'
import { homeRoute } from './home'
import { searchRoute } from './search'
import { propertyRoute } from './property'
import { accountLayout } from './account'
import { managerApplicationRoute, managerPropertiesRoute, managerPropertyRoute, tenantApplicationRoute, tenantFavoritePropertiesRoute, tenantPropertyRoute, tenantResidenceRoute, tenantResidencesRoute } from './account/routes'

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Nav/>
      <Outlet />
    </>
  ),
  notFoundComponent: () => <div>404 Not Found</div>,
})

export const rootTree = rootRoute.addChildren([
  // accountLayout,
  homeRoute,
  loginRoute,
  cognitoAuthRoute,
  searchRoute,
  propertyRoute,
  // account toutes
  accountLayout.addChildren([
    tenantPropertyRoute,
    tenantResidencesRoute,
    tenantResidenceRoute,
    tenantFavoritePropertiesRoute,
    tenantApplicationRoute,
    managerPropertyRoute,
    managerPropertiesRoute,
    managerApplicationRoute 
  ]),
])