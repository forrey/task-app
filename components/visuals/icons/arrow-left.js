function ArrowLeft(props) {
  const { color, size } = props;

  if (size === "xl") {
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
          <path d="m22.1666 14h-16.33329" />
          <path d="m14 22.1667-8.16669-8.1667 8.16669-8.16666" />
        </g>
      </svg>
    );
  }

  if (size === "l") {
    return (
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-width="2"
        >
          <path d="m19 12h-14" />
          <path d="m12 19-7-7 7-7" />
        </g>
      </svg>
    );
  }

  if (size === "m") {
    return (
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
          <path d="m17.8334 12h-11.66671" />
          <path d="m12 17.8333-5.83331-5.8333 5.83331-5.83334" />
        </g>
      </svg>
    );
  }
}

export default ArrowLeft;
