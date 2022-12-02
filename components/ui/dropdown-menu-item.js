import classNames from "classnames";
import { useState } from "react";

function DropdownMenuItem(props) {
  const { icon, text, onClick } = props;

  const [hover, setHover] = useState(false);

  return (
    <div
      className={classNames(
        hover ? "bg-d80" : "bg-white",
        "flex flex-row items-center rounded-sm p-1 pr-2 gap-1 cursor-pointer text-d10 whitespace-nowrap"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
}

export default DropdownMenuItem;
