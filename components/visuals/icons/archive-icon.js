function ArchiveIcon(props) {
  const { color } = props;

  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="m19.5 8.66666v10.83334h-15v-10.83334" />
        <path d="m21.1666 4.5h-18.33329v4.16667h18.33329z" />
        <path d="m10.3333 12h3.3333" />
      </g>
    </svg>
  );
}

ArchiveIcon.defaultProps = {
  color: "#222",
};

export default ArchiveIcon;
