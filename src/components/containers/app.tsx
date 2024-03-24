import Navigation from "./navigation";
import Page from "../../pages/LinkedListPage/page";

function App() {
  return (
    <div className="flex flex-col min-h-screen gap-4 md:gap-0 ">
      <header>
        <Navigation />
      </header>
      <div className="md:flex-1 flex justify-center items-center">
        <Page />
      </div>
    </div>
  );
}

export default App;
