import { PropsWithChildren } from "react";
import Navigation from "../components/containers/navigation";

type Props = PropsWithChildren;

function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen md:gap-20 gap-4 w-full container">
      <header>
        <Navigation />
      </header>
      <div className="md:flex-1 flex container">{children}</div>
    </div>
  );
}

export default MainLayout;
