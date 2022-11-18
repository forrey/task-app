import InputLabel from "./input-label";

function TextInput(props) {
  const { hasLabel, labelText, id, ref, isRequired, placeholderText } = props;

  return (
    <div className="grow">
      {hasLabel && <InputLabel labelText={labelText} targetId={id} />}
      <input
        id={id}
        type="text"
        ref={ref}
        required={isRequired}
        placeholder={placeholderText}
        className="h-10 border-b50 border rounded w-full px-3 placeholder-d60 text-d10 text-base outline-b30"
      />
    </div>
  );
}

TextInput.defaultProps = {
  hasLabel: true,
  isRequired: false,
};

export default TextInput;
