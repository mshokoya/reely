import { useMount, useObservable } from "@legendapp/state/react"
import { AuthContext } from "./auth_context"
import { loginAction, logoutAction, verifyLoginAction } from "../../actions/auth_actions"

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = useObservable<Ouser>(null);
  const isLoading = useObservable<boolean>(false);

  useMount(() => {
    isLoading.set(true);
    (async () => {
      await verifyLoginAction()
        .then((u) => {
          user.set(u)
        })
        .catch((e) => {
          console.error(e)
        });
    })()
    isLoading.set(false)
  })

  const login = async () => {
    if (isLoading.peek()) return
    isLoading.set(true);
    await loginAction();
    isLoading.set(false)
  }

  const logout = async () => {
    if (isLoading.peek()) return
    isLoading.set(true);
    await logoutAction().then(() => user.set(null));
    isLoading.set(false)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}