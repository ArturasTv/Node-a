import { Reorder } from "framer-motion";
import { LinkedListNode } from "../../../models/common";
import Node from "./linked-list-node";

type Props = {
  head: LinkedListNode | null;
  onDelete: (index: number) => void;
};

function LinkedList({ head, onDelete }: Props) {
  // TODO: move this utility function to separate file for transforming linked list to array
  const generateNodes = () => {
    const array: Omit<LinkedListNode, "next">[] = [];

    if (!head) return [];

    let current = head;

    while (current.next) {
      array.push({
        data: current.data,
        index: current.index,
      });

      current = current.next;
    }

    array.push({
      data: current.data,
      index: current.index,
    });

    return array;
  };

  const items = generateNodes();

  return (
    <Reorder.Group
      className="flex gap-4 flex-wrap"
      values={items}
      onReorder={() => null}
    >
      {items.map((node) => (
        <Reorder.Item
          drag={false}
          key={`${node.data}-${node.index}`}
          value={node}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Node data={node.data} index={node.index} onDelete={onDelete} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default LinkedList;
