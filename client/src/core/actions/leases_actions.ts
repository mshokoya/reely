import { fetch_api } from "../util";

export const getLeases = async (propertyId: string) => (
  await fetch_api<Lease[]>({
    url: `${import.meta.env.VITE_API_URL}/leases?propertyId=${propertyId}`
  })
)