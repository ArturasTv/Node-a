import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navigation from "../components/containers/navigation";
import { linkedListRoute } from "../pages/LinkedListPage/route";

// TODO: create layout system
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col min-h-screen md:gap-20 gap-4 w-full container">
        <header>
          <Navigation />
        </header>
        <div className="md:flex-1 flex container">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
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
