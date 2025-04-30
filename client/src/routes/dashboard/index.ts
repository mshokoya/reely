import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { Dashboard } from "./dashboard";

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard
})