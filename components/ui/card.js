import classNames from "classnames";

function Card(props) {
  const { paddingSize, hasHover } = props;

  return (
    <div
      className={classNames([
        "grow basis-0 bg-white shadow-card-shadow rounded-lg border border-white transition",
        paddingSize === "m" && "px-6 py-5",
        paddingSize === "l" && "px-9 py-8",
        hasHover && "hover:border hover:border-b30 hover:cursor-pointer",
      ])}
    >
      {props.children}
    </div>
  );
}

Card.defaultProps = {
  paddingSize: "m",
  hasHover: false,
};

export default Card;
