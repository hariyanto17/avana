import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { allertSelector, setAllert } from "../../../store";

const Allert = () => {
  const allert = useSelector(allertSelector, shallowEqual);

  const dispatch = useDispatch();

  const onCloseClick = () => {
    dispatch(setAllert(false));
  };

  if (allert.visible) {
    return (
      <div className="overlay fixed inset-0 h-screen z-50">
        <div className="bg-white opacity-25 inset-0 absolute z-10"></div>
        <div className="absolute z-20 flex items-center justify-center inset-0">
          <div className="bg-dark-gray rounded-3xl shadow-2xl max-w-3xl max-h-2xl">
            <div className="relative">
              <span className="modal-close"></span>
            </div>
            <div className="w-96 h-60 rounded-lg px-5 flex items-center justify-center flex-col">
              <h1 className="text-center mt-4 text-white text-lg mb-5">
                You are not allowed to change this data
              </h1>
              <button
                onClick={onCloseClick}
                className="px-5 py-2 bg-yellow-500 rounded-lg"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
};

export default Allert;
