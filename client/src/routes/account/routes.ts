import { createRoute } from "@tanstack/react-router";
// import { rootRoute } from "../root";
import { getApplications } from "@/core/actions/application_actions";
import { ManagerApplications } from "./manager/application";
import { getFavoriteProperties, getUserProperty } from "@/core/actions/property_actions";
import { ManagerProperties } from "./manager/properties";
import { ManagerProperty } from "./manager/property";
import { TenentApplications } from "./tenant/applications";
import { Favorites } from "./tenant/favorites";
import { Residence } from "./tenant/residence";
import { accountLayout } from ".";
import { Property } from "../property/page";
import { getPropertyy } from "@/mock/mock";

export const managerApplicationRoute = createRoute({
  getParentRoute: () => accountLayout,
  path: '/manager/$uid/applications',
  // validateSearch: (search: Record<string, string>) => {
  //   if (!search.uid) throw new Error('failed to get load page (u)')
  //   return {userId: search.uid}
  // },
  loader: async () => {
    return await getApplications()
  },
  component: ManagerApplications
})

export const managerPropertiesRoute = createRoute({
  getParentRoute: () => accountLayout,
  path: '/manager/properties',
  // loader: async () => {
  //   console.log('in err')
  //   return await getProperties()
  // },
  component: ManagerProperties
})

// TODO: create route that fetches property, leases, and payments...
export const managerPropertyRoute = createRoute({
  getParentRoute: () => accountLayout,
  path: '/manager/property/$pid',
  loader: async ({ params }) => {
    const { pid } = params

    // TODO: all these soulde be fetched from the getManagerProperty route
    // const { data: property, isLoading: propertyLoading } = useGetPropertyQuery(propertyId);
    // const { data: leases, isLoading: leasesLoading } = useGetPropertyLeasesQuery(propertyId);
    // const { data: payments, isLoading: paymentsLoading } = useGetPaymentsQuery(propertyId);
    return await getUserProperty(pid, 'manager')
  },
  component: ManagerProperty
})

export const tenantApplicationRoute = createRoute({
  getParentRoute: () => accountLayout,
  // getParentRoute: () => rootRoute,
  path: '/tenant/applications',
  // loader: async () => {
  //   return await getApplications()
  // },
  component: TenentApplications
})

export const tenantFavoritePropertiesRoute = createRoute({
  getParentRoute: () => accountLayout,
  path: '/tenant/favorites',
  loader: async () => {
    return await getFavoriteProperties()
  },
  component: Favorites
})

export const tenantResidenceRoute = createRoute({
  getParentRoute: () => accountLayout,
  path: '/tenant/residence/$pid',
  // loader: async ({ params }) => {
  //   const { pid } = params
  //   return await getUserProperty(pid, 'tenant')
  // },
  component: Residence
})

export const tenantResidencesRoute = createRoute({
  getParentRoute: () => accountLayout,
  path: '/tenant/residences',
  // loader: async () => {
  //   return await getResidences()
  // },
  component: Residence
})

export const tenantPropertyRoute = createRoute({
  getParentRoute: () => accountLayout,
  path: '/tenant/property/$pid',
  // loader: async () => {
  //   return await getResidences()
  // },
  loader: async ({ params: { pid } }) => await fetchProperty(pid),
  component: Property
})

async function fetchProperty(propertyId: string) {
  console.log(propertyId)
  // const search = searchFilter()
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/property/${propertyId}`
  // return fetch_api({url})
  // return search.listings.data.get()[0]
  return getPropertyy(propertyId)
}