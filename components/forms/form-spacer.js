function FormSpacer(props) {
  const { hasDivider } = props;

  return (
    <div className="flex items-center w-full h-3">
      {hasDivider && <div className="h-px bg-b70 grow mb-6"></div>}
    </div>
  );
}

FormSpacer.defaultProps = {
  hasDivider: false,
};

export default FormSpacer;
