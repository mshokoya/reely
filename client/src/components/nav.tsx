import { useNavigate, useLocation } from "@tanstack/react-router"
import { useAuth } from '../core/providers/auth/auth_context';
import { useState } from "react";
import { observer } from "@legendapp/state/react";

export const Nav = observer(() => {
  const {login, user, logout} = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate({ from: '/' })
  const href = useLocation().href

  const accountClick = () => {
    if (isLoading) return
    setIsLoading(true)
    const usr = user.peek() as User;
    if (usr) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      usr.userType.includes('manager')
        ? navigate({ to: '/dashboard/manager' })
        : navigate({ to: '/dashboard/tenant' })
    } else {
      login();
    }
    setIsLoading(false)
  }

  const logoutClick = async () => {
    if (isLoading) return
    await logout()
      .then(async () => {
        if (href === import.meta.env.VITE_API_URL) return
        navigate({ to: '/' })
      })
      .catch(err => console.log(err))
    setIsLoading(false)
  }

  const butt = () => {
    console.log(user.get())
  }

  return (
    <nav className="flex justify-between bg-amber-400 h-10 px-5 items-center">
      <div>Logo</div>
      <div>
        <button disabled={isLoading} onClick={accountClick}>Account</button>
        <button onClick={butt}>butt</button>
        {
          user.get() && (
            <button disabled={isLoading} onClick={logoutClick}>logout</button>
          )
        }
      </div>
    </nav>
  )
})