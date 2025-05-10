import { getUserr } from "@/mock/mock";
import { fetch_api } from "../util";

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
  return await fetch_api({ url: import.meta.env.VITE_LOGOUT_PATH as string })
};

export const verifyLoginAction = async () => {
  // return await fetch_api<User>({ url: import.meta.env.VITE_GET_ME_PATH })
  return getUserr('user123')
};