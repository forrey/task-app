import MenuItem from "./menu-item";
import HomeIcon from "../visuals/icons/home-icon";
import ArchiveIcon from "../visuals/icons/archive-icon";

function Menu(props) {
  return (
    <ul className="flex flex-col justify-center h-full">
      <MenuItem text="Open" active="true" icon={<HomeIcon color="#365BFC" />} />
      <MenuItem text="Archived" icon={<ArchiveIcon />} />
    </ul>
  );
}

export default Menu;
