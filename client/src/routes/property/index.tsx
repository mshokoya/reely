import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { Property } from "./page";
// import { fetch_api } from "@/core/util";
import searchFilter from "@/hooks/useSearchFilter";

export const propertyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/property/$propertyId',
  loader: async ({ params: {propertyId} }) => await fetchProperty(propertyId),
  component: Property
})

async function fetchProperty(propertyId: string) {
  console.log(propertyId)
  const search = searchFilter()
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/property/${propertyId}`
  // return fetch_api({url})
  return search.listings.data.get()[0]
}