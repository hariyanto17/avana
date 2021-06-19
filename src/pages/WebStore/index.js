import { Sidebar } from "../../components";

const WebStore = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <p>main menu</p>
      </main>
    </div>
  );
};
export default WebStore;
