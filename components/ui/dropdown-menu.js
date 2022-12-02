import { useState } from "react";
import classNames from "classnames";
import Spinner from "./spinner";

function DropdownMenu(props) {
  const { triggerIcon, hasSpinner, isSpinning } = props;

  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {hasSpinner && isSpinning && (
        <Spinner backgroundColor="white" spinnerColor="dark" />
      )}
      <div
        className={classNames(
          hover ? "bg-d80" : "bg-white",
          "h-8 w-8 flex justify-center items-center rounded-sm cursor-pointer"
        )}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {triggerIcon}
      </div>
      {isOpen && (
        <div
          className="shadow-floating-shadow p-2 rounded w-fit flex flex-col gap-0.5 absolute bg-white right-0"
          onClick={() => setIsOpen(false)}
        >
          {props.children}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
