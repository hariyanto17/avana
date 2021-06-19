import { Sidebar } from "../../components";

const Products = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <p>main menu</p>
      </main>
    </div>
  );
};
export default Products;
