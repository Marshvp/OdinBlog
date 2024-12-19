import { Outlet } from "react-router-dom";
import NavBar from "./src/components/NavBar";

export default function Layout() {
  return (
    <div className="bg-blogGrey min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}
