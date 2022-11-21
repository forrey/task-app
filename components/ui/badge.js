import classNames from "classnames";

function Badge(props) {
  const { text, color } = props;

  return (
    <div
      className={classNames(
        color,
        "h-6 text-white text-sm w-fit px-2 rounded-sm flex items-center"
      )}
    >
      {text}
    </div>
  );
}

Badge.defaultProps = {
  color: "bg-d65",
  text: "badge",
};

export default Badge;
