import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LinkedListNode } from "../models/common";
import { LOCAL_STORAGE_KEYS } from "../constants/localstorage";
import type { Store } from "./common";
import { getBeforeTail, getTail } from "../utils/nodes";

type LinkedListStore = Store<LinkedListNode>;

const useLinkedListStore = create(
    persist<LinkedListStore>(
        (set, get) => ({
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

                    return { head: head };
                }),
            pop: () =>
                set((state) => {
                    const { head } = state;

                    if (!head || !head.next) return { head: null };

                    const current = getBeforeTail(head);
                    current.next = null;

                    return { head: head };
                }),
            shift: () =>
                set((state) => {
                    const { head } = state;

                    if (!head || !head.next) return { head: null };

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
                        return { head: head.next };
                    }

                    while (current.next && !found) {
                        if (current.next.data === data) {
                            found = true;
                            break;
                        }

                        current = current.next;
                    }

                    if (found && current?.next?.next) {
                        current.next = current.next.next;
                    }

                    return { head: head };
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
        },
    ),
);

export default useLinkedListStore;
