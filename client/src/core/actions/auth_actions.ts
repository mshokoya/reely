import { jwtDecode } from "jwt-decode";
import { fetch_api, get_cookie } from "../util";

export const loginAction = async () => (
  await fetch_api({ url: import.meta.env.VITE_LOGIN_PATH as string })
    .then(() =>
      fetch_api<{ congnitoLoginURL: string }>({ url: import.meta.env.VITE_LOGIN_PATH })
        .then(data => window.location.href = data.congnitoLoginURL)
    )
);

export const signupAction = async () => (
  await fetch_api({ url: import.meta.env.VITE_SIGNUP_PATH as string, method: 'POST' })
    .then(data => { console.log(data) })
);

export const logoutAction = async () => {
  console.log('EEYYAA')
  return await fetch_api({ url: import.meta.env.VITE_LOGOUT_PATH as string })
};

export const verifyLoginAction = async () => {
  const token = get_cookie(import.meta.env.VITE_ID_TOKEN as string);
  console.log(token)
  if (!token) return;
  const decoded_token = jwtDecode<IDTOKEN>(token);
  if (!decoded_token || !decoded_token.email) return;
  return await fetch_api<User>({ url: `${import.meta.env.VITE_FIND_USER_BY_EMAIL_PATH}/${decoded_token.email}` })
};

export const loginCallbackAction = async (code: string) => {

};