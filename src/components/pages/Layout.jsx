import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export default function Layout() {
  return (
    <div className="px-5 bg-blogGrey min-h-screen ">
      <NavBar />
      <Outlet />
    </div>
  );
}
