import { ReactNode } from "react";
import { cn } from "../../utils/common";

type Props = {
  title: string;
  sideBar: ReactNode;
  content: ReactNode;
  className?: string;
};

function SideCard({ title, sideBar, content, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row bg-base-100 md:shadow-md",
        className
      )}
    >
      {sideBar}
      <div className="p-4 flex flex-col w-full gap-4">
        <h2 className="card-title">{title}</h2>
        {content}
      </div>
    </div>
  );
}

export default SideCard;
