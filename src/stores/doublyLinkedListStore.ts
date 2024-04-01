import { create } from "zustand";
import { DoublyLinkedListNode } from "../models/common";
import { Store } from "./common";
import { getBeforeTail, getTail } from "../utils/nodes";

type DoublyLinkedListStore = Store<DoublyLinkedListNode>;

const useDoublyLinkedListStore = create<DoublyLinkedListStore>((set, get) => ({
  head: null,
  push: (node) =>
    set((state) => {
      const { head } = state;

      if (!head) {
        return {
          head: node,
        };
      }

      const tail = getTail(head);

      tail.next = node;

      node.prev = null;

      // Check if the current tail node exists and update its previous reference
      if (tail) {
        node.prev = tail;
      }

      return { head };
    }),
  pop: () =>
    set((state) => {
      const { head } = state;

      if (!head || !head.next) return { head: null };

      const current = getBeforeTail(head);
      current.next = null;

      const tail = getTail(head);
      tail.prev = null;

      return { head };
    }),
  shift: () =>
    set((state) => {
      const { head } = state;

      if (!head || !head.next) return { head: null };

      head.next.prev = null;

      return { head: head.next };
    }),
  getLength: () => {
    let count = 1;

    const { head } = get();

    if (!head) return 0;

    let current = head;

    while (current.next) {
      current = current.next;
      count++;
    }

    return count;
  },
  getHead: () => {
    const { head } = get();

    return head;
  },
  getTail: () => {
    const { head } = get();

    if (!head) return null;

    const tail = getTail(head);

    return tail;
  },
  find: (data) => {
    const { head } = get();

    if (!head) return null;

    let current = head;

    while (current.next) {
      if (current.data === data) return current;

      current = current.next;
    }

    return null;
  },
  remove: (data) =>
    set((state) => {
      const { head } = state;

      if (!head) {
        return {
          head: null,
        };
      }

      let found = false;
      let current = head;

      if (current.data === data) {
        const newHead = current.next;

        newHead!.prev = null;

        return { head: head.next };
      }

      while (current.next && !found) {
        if (current.next.data === data) {
          found = true;
          break;
        }

        current = current.next;
      }

      if (found) {
        const nodeToRemove = current.next;

        nodeToRemove!.prev = null;

        current.next = nodeToRemove!.next;
      }

      return { head };
    }),
  reverse: () =>
    set((state) => {
      let { head } = state;

      let prev = null;
      let current = head;

      while (current !== null) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
      }

      head = prev;

      return { head };
    }),
}));

export default useDoublyLinkedListStore;
