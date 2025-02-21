import { type ReactNode } from "react";
import NavLink from "./components/NavLink";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="bg-surface justify-left fixed top-0 left-0 flex w-screen flex-row gap-2 p-2 py-3 align-middle sm:gap-8 sm:p-4">
        <NavLink to="/">Web Tracking</NavLink>{" "}
        <NavLink to="/mitigation-strategies">Protect yourself</NavLink>{" "}
        <NavLink to="/test">Test your browser</NavLink>{" "}
      </nav>

      <main className="box-border flex w-screen flex-col items-center gap-8 p-8 pt-14">
        {children}
      </main>
    </>
  );
};

export default Layout;
