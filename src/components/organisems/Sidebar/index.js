import React from "react";
import { Logo, UserProfile } from "../../atoms";
import { SidebarList } from "../../moleculs";

const Sidebar = () => {
  return (
    <aside
      className="bg-dark-gray arrayToDestruct max-h-screen h-screen overflow-auto"
      style={{ width: 250 }}
    >
      <div
        className="bg-indigo-1000 max-h-screen h-screen flex flex-col content-between"
        style={{ width: 250 }}
      >
        <div className="flex flex-col text-center mt-8">
          <Logo />
          <UserProfile />
        </div>
        <SidebarList />
      </div>
    </aside>
  );
};

export default Sidebar;
