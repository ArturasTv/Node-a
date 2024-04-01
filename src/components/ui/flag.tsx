import { CircleFlag } from "react-circle-flags";

type FlagCodes = "lt" | "us";

type Props = {
  code: FlagCodes;
  size: string;
  className?: string;
};

function Flag({ code, size, className }: Props) {
  return (
    <CircleFlag
      countryCode={code}
      height={size}
      width={size}
      className={className}
    />
  );
}

export default Flag;
