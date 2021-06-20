const Toggle = ({ on, onClick, name }) => {
  return (
    <div className="flex flex-row items-center mt-5 justify-between cursor-pointer">
      <div>
        <h3 className="text-sm text-white">{name}</h3>
      </div>
      <div
        onClick={onClick}
        className="w-14 h-6 bg-dark-gray rounded-xl relative flex flex-row justify-between px-1 items-center"
      >
        <p className="text-xs text-white">Off</p>
        <div
          className={[
            "absolute w-6 h-6 bg-yellow-500 rounded-full top-0",
            on ? "left-0" : "right-0",
          ].join(" ")}
        ></div>
        <p className="text-xs text-yellow-500">On</p>
      </div>
    </div>
  );
};
export default Toggle;
