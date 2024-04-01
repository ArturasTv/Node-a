import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { linkedListRoute } from "../pages/LinkedList/route";
import MainLayout from "../layouts/main-layout";
import { doublyLinkedListRoute } from "../pages/DoublyLinkedList/route";
import { homeRoute } from "../pages/Home/route";

export const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </MainLayout>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  linkedListRoute,
  doublyLinkedListRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
