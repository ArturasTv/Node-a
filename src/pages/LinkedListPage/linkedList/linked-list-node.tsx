import { cn } from "../../../utils/common";

type Props = {
  index: number;
  data: number;
  onDelete: (index: number) => void;
};

function Node({ index, onDelete, data }: Props) {
  return (
    <div className="size-16 rounded-full bg-primary justify-center items-center flex relative">
      <NodeIndex index={index} className="absolute top-0 right-0" />
      <NodeDeleteButton
        onDelete={onDelete}
        index={index}
        className="absolute bottom-0 right-0"
      />
      <span className="text-primary-content">{data}</span>
    </div>
  );
}

type NodeIndexProps = {
  index: number;
  className: string;
};

function NodeIndex({ index, className }: NodeIndexProps) {
  return (
    <div
      className={cn(
        "bg-accent size-5 justify-center items-center flex rounded-full",
        className
      )}
    >
      <span className="text-accent-content text-sm leading-snug">{index}</span>
    </div>
  );
}

type NodeDeleteButtonProps = {
  index: number;
  className: string;
  onDelete: (index: number) => void;
};

function NodeDeleteButton({
  index,
  className,
  onDelete,
}: NodeDeleteButtonProps) {
  return (
    <button
      className={cn(
        "bg-error size-5 justify-center items-center flex rounded-full",
        className
      )}
      onClick={() => onDelete(index)}
    >
      <span className="text-white text-sm leading-snug">x</span>
    </button>
  );
}

export default Node;
