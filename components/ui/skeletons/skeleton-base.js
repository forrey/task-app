function SkeletonBase(props) {
  const { height, width, shape, margin } = props;

  let classString = "pulsate";

  switch (height) {
    case "s":
      classString += " h-3";
      break;

    case "m":
      classString += " h-5";
      break;

    case "l":
      classString += " h-7";
      break;

    case "xl":
      classString += " h-9";
      break;

    default:
      break;
  }

  if (shape === "rectangle") {
    switch (width) {
      case "full":
        classString += " w-full";
        break;

      case "3/4":
        classString += " w-3/4";
        break;

      case "half":
        classString += " w-1/2";
        break;

      case "1/4":
        classString += " w-1/4";
        break;

      default:
        break;
    }
  } else if (shape === "circle" || shape === "square") {
    switch (height) {
      case "s":
        classString += " w-3";
        break;

      case "m":
        classString += " w-5";
        break;

      case "l":
        classString += " w-7";
        break;

      case "xl":
        classString += " w-9";
        break;

      default:
        break;
    }
  }

  switch (shape) {
    case "rectangle":
      classString += " rounded";
      break;

    case "square":
      classString += " rounded";
      break;

    case "circle":
      classString += " rounded-full";
      break;

    default:
      break;
  }

  switch (margin) {
    case "xs":
      classString += " mb-0.5";
      break;

    case "s":
      classString += " mb-1";
      break;

    case "m":
      classString += " mb-2";
      break;

    case "l":
      classString += " mb-3";
      break;

    case "xl":
      classString += " mb-4";
      break;

    default:
      classString += " mb-0";
      break;
  }

  return <div className={classString}></div>;
}

SkeletonBase.defaultProps = {
  height: "m",
  width: "full",
  shape: "rectangle",
};
export default SkeletonBase;
