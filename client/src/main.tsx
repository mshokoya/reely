import './main.css';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import { AuthProvider } from './core/providers/auth/auth_provider'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)