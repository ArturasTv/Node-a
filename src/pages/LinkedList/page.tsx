import BasicLayout from "../../layouts/basic-layout";
import useLinkedListStore from "../../stores/linkedListStore";
import LinkedList from "./components/linkedList/linked-list";
import SideMenu from "./components/sideMenu/side-menu";

function Page() {
    const head = useLinkedListStore((state) => state.head);
    const remove = useLinkedListStore((state) => state.remove);

    return (
        <BasicLayout>
            <SideMenu className="min-w-48" />
            <LinkedList onDelete={remove} head={head} />
        </BasicLayout>
    );
}

export default Page;
