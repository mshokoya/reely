import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'

function component() {
  return <div>Home</div>
}

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component
})