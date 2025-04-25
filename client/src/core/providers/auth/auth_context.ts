import { ObservableBoolean, Observable } from "@legendapp/state"
import { createContext, useContext } from "react"

type User = {
  id: string
  email: string
  userType: ('manager' | 'tenant')[]
}

type AuthContextType = {
  user: Observable<Ouser>
  login: () => Promise<void>
  logout: () => Promise<void>
  isLoading: ObservableBoolean
}

export const AuthContext = createContext<AuthContextType>({
  user: (null as unknown) as Observable<User>,
  login: async () => { },
  logout: async () => { },
  isLoading: (false as unknown) as ObservableBoolean,
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}