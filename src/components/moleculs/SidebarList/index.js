import React from "react";
import { SidebarLink } from "../../atoms";

const SidebarList = () => {
  return (
    <ul className="main-menu mt-8">
      <SidebarLink name="Dashboard" to="/" />
      <SidebarLink name="My Orders" to="/myorders" />
      <SidebarLink name="My Product" to="/myproduct" withDropdown />
      <SidebarLink name="Setting" to="/settings" withDropdown />
    </ul>
  );
};

export default SidebarList;
