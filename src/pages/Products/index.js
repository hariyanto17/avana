import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar, Toggle } from "../../components";
import {
  productsSelector,
  setProductsAllow,
  setProductsShow,
} from "../../store";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector, shallowEqual);

  const handleShow = () => {
    dispatch(setProductsShow(!products.isShowed));
  };

  const handleAllow = () => {
    dispatch(setProductsAllow(!products.isAllowed));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-1 bg-gray-main justify-center items-center">
        <div className="w-96 h-60 border rounded-lg border-yellow-500 px-5">
          <h1 className="text-center mt-4 text-white text-lg">
            Change Dashboard visibility
          </h1>
          <div className="mt-12">
            <Toggle name="show" on={products.isShowed} onClick={handleShow} />
            <Toggle
              name="Allowed"
              on={products.isAllowed}
              onClick={handleAllow}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Products;
