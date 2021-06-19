import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import ChildSidebarLink from "../ChildSidebarList";
import DropDown from "../DropDown";

const SidebarLink = ({ data }) => {
  const location = useLocation();

  const isActive =
    `/${data.id}` === location.pathname ||
    (data.id === "dashboard" && location.pathname === "/");

  const renderChilds = () => {
    if (data.childs && isActive) {
      return data.childs.map((item) => {
        return (
          <ul className="main-menu mt-4 ml-14" key={item.id}>
            <ChildSidebarLink name={item.id} />
          </ul>
        );
      });
    }
  };

  if (data.isShowed) {
    return (
      <>
        <li className="flex items-center">
          <Link
            className={[
              "nav-link relative my-1 py-3 px-12 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-white",
              isActive ? "active bg-gray-300 bg-opacity-10" : "",
            ].join(" ")}
            to={`/${data.id === "dashboard" ? "" : data.id}`}
          >
            {data.id}
            {data.childs ? <DropDown isActive={isActive} /> : <div />}
          </Link>

          {isActive ? (
            <div className="border border-yellow-300 bg-yellow-300 h-12 w-1"></div>
          ) : (
            <div />
          )}
        </li>
        {renderChilds()}
      </>
    );
  }
  return <div />;
};

export default SidebarLink;

SidebarLink.defaultProps = {
  data: {},
};

SidebarLink.propTypes = {
  data: propTypes.object.isRequired,
};
