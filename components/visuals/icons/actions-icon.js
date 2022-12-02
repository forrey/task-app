function ActionsIcon(props) {
  const { size } = props;

  if (size === "m") {
    return (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <g
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="m12 12.8333c.4603 0 .8334-.3731.8334-.8333s-.3731-.8333-.8334-.8333c-.4602 0-.8333.3731-.8333.8333s.3731.8333.8333.8333z" />
          <path d="m17.8333 12.8333c.4603 0 .8334-.3731.8334-.8333s-.3731-.8333-.8334-.8333c-.4602 0-.8333.3731-.8333.8333s.3731.8333.8333.8333z" />
          <path d="m6.16665 12.8333c.46023 0 .83333-.3731.83333-.8333s-.3731-.8333-.83333-.8333c-.46024 0-.83334.3731-.83334.8333s.3731.8333.83334.8333z" />
        </g>
      </svg>
    );
  }
}

ActionsIcon.defaultProps = {
  size: "m",
};

export default ActionsIcon;
