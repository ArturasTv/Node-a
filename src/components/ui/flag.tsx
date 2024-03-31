import WorldFlag from "react-world-flags";

type FlagCodes = "LT" | "US";

type Props = {
  code: FlagCodes;
  size: string;
  className?: string;
};

function Flag({ code, size, className }: Props) {
  return (
    <WorldFlag code={code} height={size} width={size} className={className} />
  );
}

export default Flag;
