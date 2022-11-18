function InputLabel(props) {
  const { labelText, targetId } = props;
  return (
    <label htmlFor={targetId} className="block mb-1 text-d10 text-sm">
      {labelText}
    </label>
  );
}

export default InputLabel;
