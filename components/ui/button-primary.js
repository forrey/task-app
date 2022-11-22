import AddIcon from "../visuals/icons/add-icon";
import Link from "next/link";

function ButtonPrimary(props) {
  const { text, link, hasIcon, onClick, hasSpinner, isSpinning } = props;

  return (
    <Link href={link} className="relative">
      {hasSpinner && isSpinning && (
        <div className="bg-b10 absolute inset-0 border-b10 rounded flex items-center">
          <div className="loader"></div>
        </div>
      )}
      <button
        onClick={onClick}
        className="bg-b10 border border-b10 py-1 pl-2 pr-3 flex items-center rounded hover:bg-b15 hover:shadow hover:transition-all transition"
      >
        {hasIcon && (
          <i className="mr-1">
            <AddIcon size="medium" />
          </i>
        )}
        <span className="text-bas text-white">{text}</span>
      </button>
    </Link>
  );
}

ButtonPrimary.defaultProps = {
  text: "Button",
  hasIcon: false,
  hasSpinner: false,
};

export default ButtonPrimary;
