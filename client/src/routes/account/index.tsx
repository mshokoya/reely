import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
// import { getApplications } from "@/core/actions/application_actions";
// import { ManagerApplications } from "./manager/application";
// import { getUserProperty } from "@/core/actions/property_actions";
// import { ManagerProperties } from "./manager/properties";
// import { ManagerProperty } from "./manager/property";
// import { TenentApplications } from "./tenant/applications";
// import { Favorites } from "./tenant/favorites";
// import { Residence } from "./tenant/residence";
import { Account } from "./layout";
// import { managerApplicationRoute, managerPropertiesRoute, managerPropertyRoute, tenantApplicationRoute, tenantFavoritePropertiesRoute, tenantResidenceRoute, tenantResidencesRoute } from "./routes";
// import { accountLayout } from "./layout";



export const accountLayout = createRoute({
  path: '/account',
  component: Account,
  getParentRoute: () => rootRoute,
})
// .addChildren([
//   tenantResidencesRoute,
//   tenantResidenceRoute,
//   tenantFavoritePropertiesRoute,
//   tenantApplicationRoute,
//   managerPropertyRoute,
//   managerPropertiesRoute,
//   managerApplicationRoute
// ])