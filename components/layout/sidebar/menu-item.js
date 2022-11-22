import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

function MenuItem(props) {
  const { text, icon, link } = props;
  const router = useRouter();

  const active = router.pathname === link ? true : false;

  return (
    <Link href={link}>
      <li
        className={classNames([
          "px-6 my-1 flex items-center border-l-4",
          active ? "border-l-b10" : "border-l-white",
        ])}
      >
        <i
          className={classNames(["pr-3", active ? "stroke-b10" : "stroke-d10"])}
        >
          {icon}
        </i>
        <div
          className={classNames([
            "py-1 text-m font-normal",
            active ? "text-b10" : null,
          ])}
        >
          {text}
        </div>
      </li>
    </Link>
  );
}

export default MenuItem;
