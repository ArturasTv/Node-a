import { Reorder } from "framer-motion";
import { LinkedListNode } from "../../../../models/common";
import useLinkedListStore from "../../../../stores/linkedListStore";
import { useEffect, useState } from "react";
import Node from "../../../../components/ui/node";

type Props = {
  head: LinkedListNode | null;
  onDelete: (index: number) => void;
};

function LinkedList({ head, onDelete }: Props) {
  const generateNodes = () => {
    const array = [];

    if (!head) return [];

    let current = head;

    while (current.next) {
      array.push({
        data: current.data,
      });

      current = current.next;
    }

    array.push({
      data: current.data,
    });

    return array;
  };

  const [items, setItems] = useState(generateNodes());

  const length = useLinkedListStore((state) => state.getLength());

  useEffect(() => {
    const newItems = generateNodes();
    setItems(newItems);
  }, [length, head]);

  return (
    <Reorder.Group
      className="flex gap-4 flex-wrap"
      values={items}
      onReorder={() => null}
    >
      {items.map((node) => (
        <Reorder.Item
          drag
          draggable
          dragSnapToOrigin={false}
          value={node}
          key={`${node.data}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fill-primary stroke-primary h-fit w-fit"
        >
          <Node data={node.data} onDelete={onDelete} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default LinkedList;
