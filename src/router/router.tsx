import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { linkedListRoute } from "../pages/LinkedListPage/route";
import MainLayout from "../layouts/main-layout";

// TODO: create layout system
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <MainLayout>
        <Outlet />
        <TanStackRouterDevtools />
      </MainLayout>
    </>
  ),
});

const routeTree = rootRoute.addChildren([linkedListRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
