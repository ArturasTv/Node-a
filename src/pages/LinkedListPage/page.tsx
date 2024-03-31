import useLinkedListStore from "../../stores/linkedListStore";
import LinkedList from "./linkedList/linked-list";
import SideMenu from "./sideMenu/side-menu";

function Page() {
  const head = useLinkedListStore((state) => state.head);
  const remove = useLinkedListStore((state) => state.remove);

  return (
    <div className="flex md:flex-row flex-col gap-4 w-full">
      <SideMenu className="min-w-48" />
      <LinkedList onDelete={remove} head={head} />
    </div>
  );
}

export default Page;
