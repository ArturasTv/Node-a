export type Store<T> = {
  head: T | null;
  push: (node: T) => void;
  pop: () => void;
  shift: () => void;
  getLength: () => number;
  getHead: () => T | null;
  getTail: () => T | null;
  find: (data: number) => T | null;
  remove: (data: number) => void;
  reverse: () => void;
};
