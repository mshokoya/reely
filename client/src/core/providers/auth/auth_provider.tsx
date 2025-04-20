import { useEffectOnce, useObservable } from "@legendapp/state/react"
import { AuthContext } from "./auth_context"
import { loginAction, logoutAction, verifyLoginAction } from "../../actions/auth_actions"

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = useObservable<Ouser>(null);
  const isLoading = useObservable(true);

  useEffectOnce(() => {
    isLoading.set(true);
    (async () => {
      await verifyLoginAction().then((u) => user.set(u));
    })()
    isLoading.set(false)
  }, [])

  const login = async () => {
    isLoading.set(true);
    await loginAction().then((u) => user.set(u));
    isLoading.set(false)
  }

  const logout = async () => {
    isLoading.set(true);
    await logoutAction().then(() => user.set(null));
    isLoading.set(false)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}