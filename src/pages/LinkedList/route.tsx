import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../router/router";
import Page from "./page";

export const linkedListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/linked-list",
    component: Page,
});
