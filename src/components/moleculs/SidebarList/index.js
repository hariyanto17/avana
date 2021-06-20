import { shallowEqual, useSelector } from "react-redux";
import {
  agentSelector,
  dashboardSelector,
  hqSelector,
  modulesSelector,
  ordersSelector,
  productsSelector,
  settingsSelector,
  webstoreSelector
} from "../../../store";
import { SidebarLink } from "../../atoms";


const SidebarList = () => {


  //redux state
  const dashboard = useSelector(dashboardSelector, shallowEqual);
  const hq = useSelector(hqSelector, shallowEqual);
  const agent = useSelector(agentSelector, shallowEqual);
  const orders = useSelector(ordersSelector, shallowEqual);
  const products = useSelector(productsSelector, shallowEqual);
  const webstore = useSelector(webstoreSelector, shallowEqual);
  const settings = useSelector(settingsSelector, shallowEqual);
  const modules = useSelector(modulesSelector, shallowEqual);

  return (
    <ul className="main-menu mt-8">
      <SidebarLink data={dashboard} />
      <SidebarLink data={hq} />
      <SidebarLink data={agent} />
      <SidebarLink data={orders} />
      <SidebarLink data={products} />
      <SidebarLink data={webstore} />
      <SidebarLink data={settings} />
      <SidebarLink data={modules} />
    </ul>
  );
};

export default SidebarList;
