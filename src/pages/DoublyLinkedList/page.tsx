import BasicLayout from "../../layouts/basic-layout";
import useDoublyLinkedListStore from "../../stores/doublyLinkedListStore";
import DoublyLinkedList from "./doublyLinkedLIst/doubly-linked-list";
import SideMenu from "./sideMenu/side-menu";

function Page() {
  const head = useDoublyLinkedListStore((state) => state.head);
  const remove = useDoublyLinkedListStore((state) => state.remove);

  return (
    <BasicLayout>
      <SideMenu className="min-w-48" />
      <DoublyLinkedList onDelete={remove} head={head} />
    </BasicLayout>
  );
}

export default Page;
