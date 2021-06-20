import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar, Toggle } from "../../components";
import {
  webstoreSelector,
  setWebstoreAllow,
  setWebstoreShow,
  setAllert,
} from "../../store";

const WebStore = () => {
  const dispatch = useDispatch();
  const webstore = useSelector(webstoreSelector, shallowEqual);

  const handleShow = () => {
    if (!webstore.isAllowed) {
      dispatch(setAllert(true));
    } else {
      dispatch(setWebstoreShow(!webstore.isShowed));
    }
  };

  const handleAllow = () => {
    dispatch(setWebstoreAllow(!webstore.isAllowed));
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
            <Toggle name="show" on={webstore.isShowed} onClick={handleShow} />
            <Toggle
              name="Allowed"
              on={webstore.isAllowed}
              onClick={handleAllow}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default WebStore;
