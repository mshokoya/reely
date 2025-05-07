import { fetch_api } from "../util";

export const createProperty = async (body: PropertySchema) => (
  await fetch_api({
    url: `${import.meta.env.VITE_API_URL}/property`,
    method: "POST",
    body,
  })
)

export const getProperties = async (filter: Record<string, string> = {}) => {
  const searchParams = new URLSearchParams(filter).toString();

  await fetch_api<Property[]>({
    url: `${import.meta.env.VITE_API_URL}/properties/${searchParams ? `?${searchParams}` : ''}`,
  })
}

export const getProperty = async (propertyId: string) => (
  await fetch_api<Property[]>({
    url: `${import.meta.env.VITE_API_URL}/property/${propertyId}`,
  })
)

// comes with leases and payments included
export const getUserProperty = async (propertyId: string, user: 'tenant' | 'manager') => (
  await fetch_api<{ property: Property, payments: Payment[], leases: Lease[] }>({
    url: `${import.meta.env.VITE_API_URL}/property/${user}/${propertyId}`,
  })
)

export const getFavoriteProperties = async () => (
  await fetch_api<Property[]>({ url: `${import.meta.env.VITE_API_URL}/properties/favorites` })
)

export const getResidences = async () => {
  await fetch_api<Property[]>({ url: `${import.meta.env.VITE_API_URL}/properties/residences` })
}