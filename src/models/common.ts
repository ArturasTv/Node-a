export type Node = {
    data: number;
};

export type LinkedListNode = Node & {
    next: LinkedListNode | null;
};

export type DoublyLinkedListNode = Node & {
    next: DoublyLinkedListNode | null;
    prev: DoublyLinkedListNode | null;
};
