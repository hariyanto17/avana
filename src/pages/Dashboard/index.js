import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar, Toggle } from "../../components";
import {
  dashboardSelector,
  setDashboardAllow,
  setDashboardShow,
} from "../../store";

const Dasboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(dashboardSelector, shallowEqual);

  const handleShow = () => {
    dispatch(setDashboardShow(!dashboard.isShowed));
  };

  const handleAllow = () => {
    dispatch(setDashboardAllow(!dashboard.isAllowed));
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
            <Toggle name="show" on={dashboard.isShowed} onClick={handleShow} />
            <Toggle
              name="Allowed"
              on={dashboard.isAllowed}
              onClick={handleAllow}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dasboard;
