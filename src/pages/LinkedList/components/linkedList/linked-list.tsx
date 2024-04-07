import { Reorder } from "framer-motion";
import type { LinkedListNode } from "../../../../models/common";
import useLinkedListStore from "../../../../stores/linkedListStore";
import { useEffect, useState } from "react";
import Node from "../../../../components/ui/node";
import Arrow from "../../../../components/ui/arrow";
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

    // TODO: Refactor this to use all dependencies
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        const newItems = generateNodes();
        setItems(newItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [length, head]);

    return (
        <div className="fill-primary stroke-0 stroke-primary">
            <Reorder.Group className="flex gap-8 flex-wrap" values={items} onReorder={() => null}>
                {items.map((node) => (
                    <Reorder.Item
                        key={`${node.data}`}
                        id={`linked-list-node-${node.data}`}
                        value={node}
                        drag={false}
                        draggable={false}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fill-primary stroke-primary h-fit w-fit"
                    >
                        <Node data={node.data} onDelete={onDelete} />
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            {items.map((item, index) => {
                if (index === items.length - 1) return null;

                return (
                    <Arrow
                        key={item.data}
                        startElement={`linked-list-node-${items[index].data}`}
                        endElement={`linked-list-node-${items[index + 1].data}`}
                    />
                );
            })}
        </div>
    );
}

export default LinkedList;
