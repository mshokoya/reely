import { createRoute } from "@tanstack/react-router";
import { ManagersDashboard } from "./dashboard";
import { rootRoute } from "../root";

export const managersDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/manager/dashboard',
  component: ManagersDashboard
})