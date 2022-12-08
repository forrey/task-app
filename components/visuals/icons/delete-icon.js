function DeleteIcon(props) {
  const { size } = props;

  if (size === "m") {
    return (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <g stroke="#222" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4.5 7h1.66667 13.33333" />
          <path d="m17.8334 6.99999v11.66671c0 .442-.1756.8659-.4882 1.1785-.3126.3125-.7365.4881-1.1785.4881h-8.33335c-.44202 0-.86595-.1756-1.17851-.4881-.31256-.3126-.48815-.7365-.48815-1.1785v-11.66671m2.5 0v-1.66667c0-.44202.17559-.86595.48815-1.17851s.73649-.48815 1.17856-.48815h3.3333c.442 0 .8659.17559 1.1785.48815s.4882.73649.4882 1.17851v1.66667" />
          <path d="m10.3333 11.1667v5" />
          <path d="m13.6667 11.1667v5" />
        </g>
      </svg>
    );
  } else if (size === "s") {
    return (
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <g stroke="#222" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 6h1.33333 10.66667" />
          <path d="m14.6666 6.00001v9.33329c0 .3537-.1404.6928-.3905.9429-.25.25-.5892.3905-.9428.3905h-6.66665c-.35363 0-.69276-.1405-.94281-.3905-.25005-.2501-.39053-.5892-.39053-.9429v-9.33329m2 0v-1.33333c0-.35363.14048-.69276.39053-.94281s.58919-.39053.94281-.39053h2.66665c.3536 0 .6928.14048.9428.39053.2501.25005.3905.58918.3905.94281v1.33333" />
          <path d="m8.66669 9.33334v3.99996" />
          <path d="m11.3333 9.33334v3.99996" />
        </g>
      </svg>
    );
  }
}

DeleteIcon.defaultProps = {
  size: "m",
};

export default DeleteIcon;