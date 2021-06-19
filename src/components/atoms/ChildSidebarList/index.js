const ChildSidebarLink = ({ name }) => {
  return (
    <li className="flex items-center">
      <p className="nav-link relative my-1 py-3 border-b-2 border-gray-600 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-gray-600">
        {name}
      </p>
    </li>
  );
};

export default ChildSidebarLink;
