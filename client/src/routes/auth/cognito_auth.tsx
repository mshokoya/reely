import React, { useEffect } from 'react'
import { rootRoute } from '../root';
import { createRoute, useSearch } from '@tanstack/react-router';


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
    const {state, code} = cognitoAuthRoute.useSearch();
    console.log('IN THE AUTH CALLBACK ROUTE')
    console.log(state, code)

    useEffect(() => {
        // fetch(`${import.meta.env.VITE_API_URL}/token?code=${code}&state=${state}`, { credentials: 'include'})
        fetch(`http://localhost:5000/api/auth/token?code=${code}&state=${state}`, { credentials: 'include'})
            .then(res => { if (res.status === 200) window.location.href = "/" })
            .catch(err => console.log(err))
    })

    return (
        <div>Authenticating...</div>
    )
}