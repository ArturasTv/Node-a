import Button from "../../../components/ui/button";
import useLinkedListStore from "../../../stores/linkedListStore";
import { cn } from "../../../utils/common";
import { getRandomNumber } from "../../../utils/math";

const MIN_VALUE = 0;
const MAX_VALUE = 50;

type Props = {
  className?: string;
};

function SideMenu({ className }: Props) {
  const push = useLinkedListStore((state) => state.push);
  const pop = useLinkedListStore((state) => state.pop);
  const shift = useLinkedListStore((state) => state.shift);
  const reverse = useLinkedListStore((state) => state.reverse);

  // TODO: create array for buttons
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Button
        variant="primary"
        isFullWidth
        onClick={() => {
          push({
            data: getRandomNumber(MIN_VALUE, MAX_VALUE),
            next: null,
          });
        }}
      >
        Push
      </Button>
      <Button
        isFullWidth
        onClick={() => {
          pop();
        }}
      >
        Pop
      </Button>
      <Button
        isFullWidth
        onClick={() => {
          shift();
        }}
      >
        Shift
      </Button>
      <Button
        isFullWidth
        onClick={() => {
          reverse();
        }}
      >
        Reverse
      </Button>
    </div>
  );
}

export default SideMenu;
