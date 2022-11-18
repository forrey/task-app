import classNames from "classnames";

function FormRow(props) {
  const { hasMargin, contentAlignment } = props;

  return (
    <div
      className={classNames([
        "flex w-full gap-6",
        hasMargin && "mb-6",
        { "justify-start": contentAlignment === "left" },
        { "justify-end": contentAlignment === "right" },
        { "justify-center": contentAlignment === "center" },
      ])}
    >
      {props.children}
    </div>
  );
}

FormRow.defaultProps = {
  hasMargin: true,
  contentAlignment: "left",
};

export default FormRow;
