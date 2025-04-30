import { useMount } from '@legendapp/state/react'

export const ManagersDashboard = () => {
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