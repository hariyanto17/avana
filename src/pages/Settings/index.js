import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar, Toggle } from "../../components";
import { settingsSelector, setSettingsAllow, setSettingsShow } from "../../store";

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector(settingsSelector, shallowEqual);

  const handleShow = () => {
    dispatch(setSettingsShow(!settings.isShowed));
  };

  const handleAllow = () => {
    dispatch(setSettingsAllow(!settings.isAllowed));
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
            <Toggle name="show" on={settings.isShowed} onClick={handleShow} />
            <Toggle
              name="Allowed"
              on={settings.isAllowed}
              onClick={handleAllow}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Settings;
