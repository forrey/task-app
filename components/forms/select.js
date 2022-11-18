import InputLabel from "./input-label";

function Select(props) {
  const {
    hasLabel,
    labelText,
    id,
    ref,
    isRequired,
    options,
    hasDefaultOption,
    defaultOptionText,
  } = props;

  // Please note that this component expects options to be an object of key/value pairs
  // The key will be the <option> text, and the value will be the <option> value
  // For example, {"Option 1" : "option-1", "Option 2" : "option-2"}
  // Refer to the new-request.js page to see an example of how to convert an array of objects into the proper format

  return (
    <div className="grow w-full">
      {hasLabel && <InputLabel labelText={labelText} targetId={id} />}
      <select
        id={id}
        ref={ref}
        required={isRequired}
        className="h-10 border-b50 border rounded w-full px-3 text-d10 text-base outline-b30"
      >
        {hasDefaultOption && (
          <option defaultValue disabled value="" className="text-d60">
            {defaultOptionText}
          </option>
        )}

        {options &&
          Object.entries(options).map(([key, value]) => (
            <option key={value} value={value}>
              {key}
            </option>
          ))}
      </select>
    </div>
  );
}

Select.defaultProps = {
  hasLabel: true,
  isRequired: false,
  hasDefaultOption: true,
  defaultOptionText: "Choose one",
};

export default Select;
