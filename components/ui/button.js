import AddIcon from "../visuals/icons/add-icon";
import classNames from "classnames";
import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <button
        className={classNames(
          [props.type === "primary" ? "bg-b10" : "bg-white"],
          "py-1 pl-2 pr-3 flex items-center rounded hover:bg-b15 hover:shadow hover:transition-all",
          "transition"
        )}
      >
        {props.hasIcon && (
          <i className="mr-1">
            <AddIcon
              color={props.type === "primary" ? "#fff" : "#222"}
              size="medium"
            />
          </i>
        )}
        <span
          className={classNames([
            [props.type === "primary" ? "text-white" : "text-black"],
            "text-base",
          ])}
        >
          {props.text}
        </span>
      </button>
    </Link>
  );
}

export default Button;
