function HomeIcon(props) {
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
        <path d="m4.5 9.49999 7.5-5.83333 7.5 5.83333v9.16671c0 .442-.1756.8659-.4882 1.1785-.3125.3125-.7364.4881-1.1785.4881h-11.66663c-.44203 0-.86595-.1756-1.17851-.4881-.31257-.3126-.48816-.7365-.48816-1.1785z" />
        <path d="m9.5 20.3333v-8.3333h5v8.3333" />
      </g>
    </svg>
  );
}

HomeIcon.defaultProps = {
  color: "#222",
};

export default HomeIcon;
