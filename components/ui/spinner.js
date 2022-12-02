import classNames from "classnames";

function Spinner(props) {
  const { backgroundColor, spinnerColor } = props;

  const backgroundClassString = `bg-${backgroundColor} border-${backgroundColor}`;

  return (
    <div
      className={classNames(
        backgroundClassString,
        "absolute inset-0 rounded flex items-center"
      )}
    >
      <div
        className={classNames(
          "loader",
          spinnerColor === "light" && "loader-light",
          spinnerColor === "dark" && "loader-dark"
        )}
      ></div>
    </div>
  );
}

export default Spinner;
