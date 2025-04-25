
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
  })
    .then(async (res) => {
      if (!res.ok) throw new Error(await res.text());
      return await res.json() as T
    })
}