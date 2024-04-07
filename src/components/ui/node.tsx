import { cn } from "../../utils/common";

type Props = {
    data: number;
    onDelete: (index: number) => void;
};

function Node({ onDelete, data }: Props) {
    return (
        <div className="size-16 rounded-full bg-primary justify-center items-center flex relative">
            <NodeDeleteButton onDelete={onDelete} data={data} className="absolute bottom-0 right-0" />
            <span className="text-primary-content">{data}</span>
        </div>
    );
}

type NodeDeleteButtonProps = {
    data: number;
    className: string;
    onDelete: (index: number) => void;
};

function NodeDeleteButton({ data, className, onDelete }: NodeDeleteButtonProps) {
    return (
        <button
            className={cn("bg-error size-5 justify-center items-center flex rounded-full", className)}
            type="button"
            onClick={() => onDelete(data)}
        >
            <span className="text-white text-sm leading-snug">x</span>
        </button>
    );
}

export default Node;
