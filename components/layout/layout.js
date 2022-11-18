import Sidebar from "../sidebar/sidebar";
import Container from "./container";

function Layout(props) {
  return (
    <main className="bg-ta-background h-screen flex flex-row">
      <Sidebar />
      <div className="flex-1">{props.children}</div>
    </main>
  );
}

export default Layout;
