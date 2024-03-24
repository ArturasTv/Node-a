import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LinkedListNode } from "../models/common";
import { LOCAL_STORAGE_KEYS } from "../constants/localstorage";

type LinkedListStore = {
  head: LinkedListNode | null;
  push: (node: Omit<LinkedListNode, "index">) => void;
  pop: () => void;
  shift: () => void;
  getLength: () => number;
  getHead: () => LinkedListNode | null;
  getTail: () => LinkedListNode | null;
  find: (index: number) => LinkedListNode | null;
  remove: (index: number) => void;
  reverse: () => void;
};

const useLinkedListStore = create(
  persist<LinkedListStore>(
    (set, get) => ({
      head: null,
      push: (node) =>
        set((state) => {
          const { head } = state;

          if (!head) {
            return {
              head: {
                ...node,
                index: 0,
              },
            };
          }

          const tail = getTail(head);

          const newNode = {
            ...node,
            index: tail.index + 1,
          };

          tail.next = newNode;

          return { head: deepClone(head) };
        }),
      pop: () =>
        set((state) => {
          const { head } = state;

          if (!head || !head.next) return { head: null };

          const current = getBeforeTail(head);
          current.next = null;

          return { head: deepClone(head) };
        }),
      shift: () =>
        set((state) => {
          const { head } = state;

          if (!head || !head.next) return { head: null };

          return { head: deepClone(head.next) };
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
      find: (index) => {
        const { head } = get();

        if (!head) return null;

        let current = head;

        while (current.next) {
          if (current.index === index) return current;

          current = current.next;
        }

        return null;
      },
      remove: (index) =>
        set((state) => {
          const { head } = state;

          if (!head) {
            return {
              head: null,
            };
          }
          let found = false;
          let current = head;

          if (current.index === index) {
            return { head: deepClone(head.next!) };
          }

          while (current.next && !found) {
            if (current.next.index === index) {
              found = true;
              break;
            }

            current = current.next;
          }

          if (found) {
            current.next = current.next!.next;
          }

          return { head: deepClone(head) };
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
    }),
    {
      name: LOCAL_STORAGE_KEYS.LINKED_LIST,
    }
  )
);

function getTail(head: LinkedListNode) {
  let tail = head;

  while (tail.next) {
    tail = tail.next;
  }

  return tail;
}

function getBeforeTail(head: LinkedListNode) {
  let beforeTail = head;

  while (beforeTail?.next?.next) {
    beforeTail = beforeTail.next;
  }
  return beforeTail;
}

// TODO: investigate should I need this deep cloning
function deepClone(object: object) {
  return JSON.parse(JSON.stringify(object));
}
export default useLinkedListStore;
