import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

function BasicLayout({ children }: Props) {
    return <div className="flex md:flex-row flex-col gap-4 w-full">{children}</div>;
}

export default BasicLayout;
