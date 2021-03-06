import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar, Toggle } from "../../components";
import { hqSelector, setHqAllow, setHqShow, setAllert } from "../../store";

const Hq = () => {
  const dispatch = useDispatch();
  const hq = useSelector(hqSelector, shallowEqual);

  const handleShow = () => {
    if (!hq.isAllowed) {
      dispatch(setAllert(true));
    } else {
      dispatch(setHqShow(!hq.isShowed));
    }
  };

  const handleAllow = () => {
    dispatch(setHqAllow(!hq.isAllowed));
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
            <Toggle name="show" on={hq.isShowed} onClick={handleShow} />
            <Toggle name="Allowed" on={hq.isAllowed} onClick={handleAllow} />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Hq;
