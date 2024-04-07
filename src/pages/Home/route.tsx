import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../router/router";
import Page from "./page";

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Page,
});
