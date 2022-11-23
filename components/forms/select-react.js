import { forwardRef, useState } from "react";
import Select from "react-select";
import InputLabel from "./input-label";

const SelectReact = forwardRef((props, ref) => {
  const {
    hasLabel,
    labelText,
    id,
    isRequired,
    options,
    hasDefaultOption,
    defaultOptionText,
    isSearchable,
  } = props;

  const [selectedOption, setSelectedOption] = useState();
  ref.current = selectedOption;

  return (
    <div className="grow w-full">
      {hasLabel && <InputLabel labelText={labelText} targetId={id} />}
      <Select
        id={id}
        instanceId={id}
        className="h-10 rounded w-full text-d10 text-base"
        placeholder={defaultOptionText}
        options={options}
        ref={ref}
        isSearchable={isSearchable}
        onChange={setSelectedOption}
      />
    </div>
  );
});

Select.defaultProps = {
  hasLabel: true,
  isRequired: false,
  hasDefaultOption: true,
  defaultOptionText: "Choose one",
  isSearchable: false,
};

export default SelectReact;
