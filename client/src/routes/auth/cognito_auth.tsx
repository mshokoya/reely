import { rootRoute } from '../root';
import { createRoute } from '@tanstack/react-router';
import { useAuth } from '../../core/providers/auth/auth_context';
import { useMount } from '@legendapp/state/react';


export const cognitoAuthRoute = createRoute({
  validateSearch: (search: Record<string, unknown>) => ({
    code: search.code,
    state: search.state,
  }),
  getParentRoute: () => rootRoute,
  path: '/auth/authorize',
  component: CognitoAuth,
})

function CognitoAuth() {
  const { user } = useAuth();
  const {state, code} = cognitoAuthRoute.useSearch();

  useMount(() => {
      // fetch(`${import.meta.env.VITE_API_URL}/token?code=${code}&state=${state}`, { credentials: 'include'})
      fetch(`http://localhost:5000/api/auth/token?code=${code}&state=${state}`, { credentials: 'include'})
        .then(async (res) => await res.json())
        .then((u: {data: User}) => { user.set(u.data) })
        .catch(err => console.log(err))
        .finally(() => { window.location.href = "/" })
  })

  return (
      <div>Authenticating...</div>
  )
}