import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

function CenterLayout({ children }: Props) {
    return <div className="w-full flex md:mt-32 mt-8 justify-center">{children}</div>;
}

export default CenterLayout;
