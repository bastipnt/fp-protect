import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import NavLink from "./components/NavLink";
import { scrollTopOrHash } from "./util/windowHelper";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [location] = useLocation();
  const [hashLocation] = useHashLocation();

  useEffect(() => {
    const hash = hashLocation.substring(1);

    scrollTopOrHash(hash);
  }, [location, hashLocation]);

  return (
    <>
      <nav className="bg-surface justify-left fixed top-0 left-0 z-50 flex w-screen flex-row gap-2 p-2 py-3 align-middle sm:gap-8 sm:px-8">
        <NavLink to="/">Web Tracking</NavLink>{" "}
        <NavLink to="/mitigation-strategies">Protect yourself</NavLink>{" "}
        <NavLink to="/test">Test your browser</NavLink>{" "}
        <a
          href="https://tracking-survey.bastipnt.de/?ref=test"
          target="_blank"
          className="font-heading text-md text-default ml-auto hidden flex-col justify-center text-center sm:flex sm:text-xl"
        >
          Survey
        </a>
      </nav>

      <main className="box-border flex w-screen flex-col items-center gap-8 pt-20">{children}</main>

      <footer className="text-stroke-light flex w-screen flex-row justify-end gap-2 p-4 text-sm sm:p-8 sm:text-lg">
        Contact:
        <a className="curosor-pointer" href="mailto:gt46nevl0@mozmail.com">
          Email
        </a>
        |
        <a
          className="curosor-pointer"
          href="https://github.com/bastipnt"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Github
        </a>
      </footer>
    </>
  );
};

export default Layout;
