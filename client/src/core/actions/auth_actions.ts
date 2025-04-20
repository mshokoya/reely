import { jwtDecode } from "jwt-decode";
import { fetch_api, get_cookie } from "../util";

export const loginAction = async () => (
  await fetch_api({ url: '/api/auth/user', method: 'POST' })
    .then(data => { console.log(data) })
);

export const signupAction = async () => (
  await fetch_api({ url: '/api/auth/signup', method: 'POST' })
    .then(data => { console.log(data) })
);

export const logoutAction = async () => (await fetch_api({ url: '/api/auth/logout' }));

export const verifyLoginAction = async () => {
  const token = get_cookie('ID_TOKEN')
  if (!token) return;
  const decoded_token = jwtDecode<IDTOKEN>(token);
  if (!decoded_token || !decoded_token.email) return;
  return await fetch_api<User>({ url: `/api/user/email/${decoded_token.email}` })
};