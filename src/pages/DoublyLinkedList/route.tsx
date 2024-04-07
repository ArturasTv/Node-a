import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../router/router";
import Page from "./page";

export const doublyLinkedListRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/doubly-linked-list",
    component: Page,
});
