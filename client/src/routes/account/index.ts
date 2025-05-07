import { createRoute } from "@tanstack/react-router";
import { Account } from "./account";
import { rootRoute } from "../root";
import { getApplications } from "@/core/actions/application_actions";
import { ManagerApplications } from "./manager/application";
import { getFavoriteProperties, getProperties, getResidences, getUserProperty } from "@/core/actions/property_actions";
import { ManagerProperties } from "./manager/properties";
import { ManagerProperty } from "./manager/property";
import { TenentApplications } from "./tenant/applications";
import { Favorites } from "./tenant/favorites";
import { Residence } from "./tenant/residence";

export const accountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account',
  component: Account
})

export const managerApplicationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account/manager/$uid/applications',
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
  getParentRoute: () => rootRoute,
  path: '/account/manager/properties',
  loader: async () => {
    return await getProperties()
  },
  component: ManagerProperties
})

// TODO: create route that fetches property, leases, and payments...
export const managerPropertyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account/manager/property/$pid',
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
  getParentRoute: () => rootRoute,
  path: '/account/tenant/applications',
  loader: async () => {
    return await getApplications()
  },
  component: TenentApplications
})

export const tenantFavoritePropertiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account/tenant/favorites',
  loader: async () => {
    return await getFavoriteProperties()
  },
  component: Favorites
})

export const tenantResidenceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account/tenant/residence/$pid',
  loader: async ({ params }) => {
    const { pid } = params
    return await getUserProperty(pid, 'tenant')
  },
  component: Residence
})

export const tenantResidencesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account/tenant/residences',
  loader: async () => {
    return await getResidences()
  },
  component: Residence
})
