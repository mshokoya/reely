import { useAuth } from '../../core/providers/auth/auth_context';

export const Login = () => {
  const {login} = useAuth();

  return (<div onClick={login}>Login</div>)
}

