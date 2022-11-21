import AddIcon from "../visuals/icons/add-icon";
import Link from "next/link";

function ButtonPrimary(props) {
  const { text, link, hasIcon, onClick } = props;
  return (
    <Link href={link}>
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

export default ButtonPrimary;
