
export type FetchApi = {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: { [key: string]: string }
}

export const fetch_api = async <T = unknown>({ url, method = 'GET', headers = {} }: FetchApi) => {
  return fetch(url, {
    method,
    headers: {
      ...headers
    },
    credentials: 'include'
  }).then(async (res) => await res.json() as T)
}

export function get_cookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}