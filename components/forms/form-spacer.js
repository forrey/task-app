import classNames from "classnames";

function FormSpacer(props) {
  const { hasDivider, size } = props;

  let sizeClass = "";

  switch (size) {
    case "s":
      sizeClass = "h-3";
      break;

    case "m":
      sizeClass = "h-4";
      break;

    case "l":
      sizeClass = "h-5";
      break;

    case "xl":
      sizeClass = "h-6";
      break;

    default:
      break;
  }
  return (
    <div className={classNames("flex items-center w-full h-3", sizeClass)}>
      {hasDivider && <div className="h-px bg-b70 grow mb-6"></div>}
    </div>
  );
}

FormSpacer.defaultProps = {
  hasDivider: false,
  size: "s",
};

export default FormSpacer;
