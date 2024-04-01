import { PropsWithChildren } from "react";
import Header from "../components/containers/header";
import Footer from "../components/containers/footer";

type Props = PropsWithChildren;

function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen md:gap-20 gap-4 w-full container">
      <Header />
      <div className="md:flex-1 flex container">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
