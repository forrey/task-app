import InputLabel from "./input-label";

function TextArea(props) {
  const { hasLabel, labelText, id, ref, isRequired, placeholderText, height } =
    props;

  return (
    <div className="grow">
      {hasLabel && <InputLabel labelText={labelText} targetId={id} />}
      <textarea
        id={id}
        ref={ref}
        required={isRequired}
        placeholder={placeholderText}
        className="border-b50 resize-none border rounded h-32 w-full px-3 py-2 placeholder-d60 text-d10 text-base outline-b30"
      ></textarea>
    </div>
  );
}

TextArea.defaultProps = {
  hasLabel: true,
  isRequired: false,
};

export default TextArea;
