import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../root'
import { useMount } from '@legendapp/state/react'

function C() {

  useMount(() => {
    fetch('http://localhost:5000/api/managers/dashboard', { 
      credentials: 'include'
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
    })
  })

  return (
    <div>
      managers dashboard
    </div>
  )
  
}

export const managersDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/manager/dashboard',
  component: C
})