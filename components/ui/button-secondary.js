import AddIcon from "../visuals/icons/add-icon";
import Link from "next/link";

function ButtonSecondary(props) {
  const { text, link, hasIcon, onClick } = props;
  return (
    <Link href={link}>
      <button
        onClick={onClick}
        className="bg-white border border-d10 py-1 pl-2 pr-3 flex items-center rounded hover:bg-b70 hover:shadow hover:transition-all transition"
      >
        {hasIcon && (
          <i className="mr-1">
            <AddIcon size="medium" />
          </i>
        )}
        <span className="text-base text-d10">{text}</span>
      </button>
    </Link>
  );
}

export default ButtonSecondary;
