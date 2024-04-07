export type NodeWithNext<T> = {
    next: T | null;
};

export function getTail<T extends NodeWithNext<T>>(head: T) {
    let tail = head;

    while (tail.next) {
        tail = tail.next;
    }

    return tail;
}

export function getBeforeTail<T extends NodeWithNext<T>>(head: T) {
    let beforeTail = head;

    while (beforeTail?.next?.next) {
        beforeTail = beforeTail.next;
    }
    return beforeTail;
}
