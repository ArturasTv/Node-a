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
    const array: { data: number }[] = [];

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

  const items = generateNodes();

  return (
    <Reorder.Group
      className="flex gap-11 flex-wrap"
      values={items}
      onReorder={() => null}
    >
      {items.map((node, index) => (
        <Reorder.Item
          drag={false}
          value={node}
          key={`${node.data}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fill-primary stroke-primary"
        >
          <Node data={node.data} onDelete={onDelete} id={`node-${index}`} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default LinkedList;
