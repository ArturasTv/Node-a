import SideCard from "../../components/ui/side-card";
import useLinkedListStore from "../../stores/linkedListStore";
import LinkedList from "./linkedList/linked-list";
import SideMenu from "./sideMenu/side-menu";

function Page() {
  const head = useLinkedListStore((state) => state.head);
  const remove = useLinkedListStore((state) => state.remove);

  return (
    <SideCard
      className="md:container w-full min-h-96"
      content={<LinkedList onDelete={remove} head={head} />}
      sideBar={<SideMenu className="min-w-48" />}
      title="Linked list"
    />
  );
}

export default Page;
