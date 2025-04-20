import { Link } from "@tanstack/react-router"

export const Nav = () => {
  return (
    <nav className="flex justify-between">
      <div>Logo</div>
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Signup</Link>
      </div>
    </nav>
  )
}