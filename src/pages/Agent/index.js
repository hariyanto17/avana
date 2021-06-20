import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar, Toggle } from "../../components";
import { agentSelector, setAgentAllow, setAgentShow, setAllert } from "../../store";

const Agent = () => {
  const dispatch = useDispatch();
  const agent = useSelector(agentSelector, shallowEqual);

  const handleShow = () => {
    if (!agent.isAllowed) {
      dispatch(setAllert(true));
    } else {
      dispatch(setAgentShow(!agent.isShowed));
    }
  };

  const handleAllow = () => {
    dispatch(setAgentAllow(!agent.isAllowed));
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
            <Toggle name="show" on={agent.isShowed} onClick={handleShow} />
            <Toggle
              name="Allowed"
              on={agent.isAllowed}
              onClick={handleAllow}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Agent;
