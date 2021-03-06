import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar, Toggle } from "../../components";
import {
  ordersSelector,
  setOrdersAllow,
  setOrdersShow,
  setAllert,
} from "../../store";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(ordersSelector, shallowEqual);

  const handleShow = () => {
    if (!orders.isAllowed) {
      dispatch(setAllert(true));
    } else {
      dispatch(setOrdersShow(!orders.isShowed));
    }
  };

  const handleAllow = () => {
    dispatch(setOrdersAllow(!orders.isAllowed));
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
            <Toggle name="show" on={orders.isShowed} onClick={handleShow} />
            <Toggle
              name="Allowed"
              on={orders.isAllowed}
              onClick={handleAllow}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Orders;
