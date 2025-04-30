import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { Search } from "./search_page";

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: Search
})