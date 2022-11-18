import classNames from "classnames";

function MenuItem(props) {
  return (
    <li
      className={classNames([
        "px-6 my-1 flex items-center border-l-4",
        props.active ? "border-l-b10" : "border-l-white",
      ])}
    >
      <i className={classNames(["pr-3", props.active ? "stroke-b10" : null])}>
        {props.icon}
      </i>
      <div
        className={classNames([
          "py-1 text-m font-normal",
          props.active ? "text-b10" : null,
        ])}
      >
        {props.text}
      </div>
    </li>
  );
}

export default MenuItem;
