import { forwardRef, useState } from "react";
// This is to get rid of a weird "id's dont' match" error
const Select = dynamic(
  import("react-select").then((mod) => mod.Select),
  { ssr: false }
);
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
