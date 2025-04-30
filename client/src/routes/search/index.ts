import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { Search } from "./page";

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: Search
})