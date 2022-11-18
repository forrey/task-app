function AddIcon(props) {
  const { size, color } = props;

  if (size === "large") {
    return (
      <svg
        fill="none"
        height="28"
        viewBox="0 0 28 28"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="m14 7v14" />
          <path d="m7 14h14" />
        </g>
      </svg>
    );
  }

  if (size === "medium") {
    return (
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 6.16666v11.66664" />
          <path d="m6.16669 12h11.66671" />
        </g>
      </svg>
    );
  }
}

AddIcon.defaultProps = {
  color: "#fff",
};

export default AddIcon;
