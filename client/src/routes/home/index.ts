import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";
import { Home } from "./home";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
})