const DropDown = ({ isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={[
        "absolute right-3 block transform -translate-y-1/2 focus:outline-none transition duration-200 top-1/2",
        isActive ? "rotate-0" : "-rotate-90",
      ].join(" ")}
    >
      <svg
        width="20"
        height="9"
        viewBox="0 0 20 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.197257 0.403676C0.526597 -0.0396672 1.15298 -0.132085 1.59632 0.197256L9.75 6.25427L17.9037 0.197256C18.347 -0.132085 18.9734 -0.0396672 19.3027 0.403676C19.6321 0.847019 19.5397 1.4734 19.0963 1.80274L10.3463 8.30274C9.99227 8.56575 9.50773 8.56575 9.15368 8.30274L0.403676 1.80274C-0.0396667 1.4734 -0.132084 0.847019 0.197257 0.403676Z"
          fill="gray"
        />
      </svg>
    </div>
  );
};

export default DropDown;
