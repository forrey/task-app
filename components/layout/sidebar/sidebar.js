import Menu from "./menu";

function Sidebar(props) {
  return (
    <div className="container w-48 bg-white h-full border-r border-b70 fixed">
      <Menu />
    </div>
  );
}

export default Sidebar;
