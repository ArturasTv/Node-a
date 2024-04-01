import Button from "../../../../components/ui/button";
import useLinkedListStore from "../../../../stores/linkedListStore";
import { cn } from "../../../../utils/common";
import { getRandomNumber } from "../../../../utils/math";
import { useTranslation } from "react-i18next";

const MIN_VALUE = 0;
const MAX_VALUE = 5000;

type Props = {
  className?: string;
};

const MAX_NODES_LENGTH = 5;
const MIN_NODES_LENGTH = 0;

function SideMenu({ className }: Props) {
  const { t } = useTranslation();

  const push = useLinkedListStore((state) => state.push);
  const pop = useLinkedListStore((state) => state.pop);
  const shift = useLinkedListStore((state) => state.shift);
  const reverse = useLinkedListStore((state) => state.reverse);
  const length = useLinkedListStore((state) => state.getLength());

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Button
        disabled={length === MAX_NODES_LENGTH}
        variant="primary"
        isFullWidth
        onClick={() => {
          push({
            data: getRandomNumber(MIN_VALUE, MAX_VALUE),
            next: null,
          });
        }}
      >
        {t("push")}
      </Button>
      <Button disabled={length === MIN_NODES_LENGTH} isFullWidth onClick={pop}>
        {t("pop")}
      </Button>
      <Button
        disabled={length === MIN_NODES_LENGTH}
        isFullWidth
        onClick={shift}
      >
        {t("shift")}
      </Button>
      <Button
        variant="accent"
        isFullWidth
        onClick={reverse}
        disabled={length === MIN_NODES_LENGTH}
      >
        {t("reverse")}
      </Button>
    </div>
  );
}

export default SideMenu;
