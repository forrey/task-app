import Sidebar from "./sidebar/sidebar";

function Layout(props) {
  return (
    <main className="bg-ta-background h-screen flex flex-row h-screen overflow-scroll">
      <Sidebar />
      <div className="flex-1 ml-48">{props.children}</div>
    </main>
  );
}

export default Layout;
