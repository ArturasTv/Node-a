import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import useDoublyLinkedListStore from "../../../stores/doublyLinkedListStore";
import Node from "../../../components/ui/node";
import { DoublyLinkedListNode } from "../../../models/common";

type Props = {
  head: DoublyLinkedListNode | null;
  onDelete: (index: number) => void;
};

function DoublyLinkedList({ head, onDelete }: Props) {
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

  const length = useDoublyLinkedListStore((state) => state.getLength());

  useEffect(() => {
    const newItems = generateNodes();
    setItems(newItems);
  }, [length, head]);

  return (
    <>
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
    </>
  );
}

export default DoublyLinkedList;
