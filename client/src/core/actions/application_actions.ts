import { fetch_api } from "../util"

export const getApplication = async (applicationId: string) => (
  await fetch_api<Application>({ url: `${import.meta.env.VITE_API_URL}/application/full/${applicationId}` })
)

export const getApplications = async () => (
  await fetch_api<Application[]>({ url: `${import.meta.env.VITE_API_URL}/application/all/full` })
)

export const updateApplication = async (applicationId: string, data: Partial<Application>) => (
  await fetch_api<Application>({ url: `${import.meta.env.VITE_API_URL}/application/${applicationId}`, method: 'PUT', body: data })
)
