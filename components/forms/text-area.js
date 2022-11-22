import InputLabel from "./input-label";
import { forwardRef } from "react";
import classNames from "classnames";

const TextArea = forwardRef((props, ref) => {
  const { hasLabel, labelText, id, isRequired, placeholderText, height } =
    props;

  let heightClass = "";

  switch (height) {
    case "s":
      heightClass = "h-14";
      break;

    case "m":
      heightClass = "h-20";
      break;

    case "l":
      heightClass = "h-28";
      break;

    case "xl":
      heightClass = "h-32";
      break;

    case "xxl":
      heightClass = "h-40";
      break;

    default:
      break;
  }

  return (
    <div className="grow">
      {hasLabel && <InputLabel labelText={labelText} targetId={id} />}
      <textarea
        id={id}
        ref={ref}
        required={isRequired}
        placeholder={placeholderText}
        rows={height}
        className={classNames(
          "border-b50 resize-none border rounded w-full px-3 py-2 placeholder-d60 text-d10 text-base outline-b30",
          [heightClass]
        )}
      ></textarea>
    </div>
  );
});

TextArea.defaultProps = {
  hasLabel: true,
  isRequired: false,
  height: "m",
};

export default TextArea;
