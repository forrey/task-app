function EmptyState(props) {
  return (
    <div className="w-full flex justify-center flex-col items-center h-[70vh] gap-8">
      <div>{props.illustration}</div>
      <div className="text-d50">{props.text}</div>
    </div>
  );
}

export default EmptyState;
