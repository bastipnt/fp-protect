import { type ReactNode } from "react";
import { Link } from "wouter";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 flex w-screen flex-row justify-center gap-4 p-4">
        <Link
          to="/"
          className={(active) => `${active ? "bg-surface-darker" : "bg-surface"} border-4 px-2`}
        >
          <h3 className="text-3xl">Web Tracking</h3>
        </Link>{" "}
        <Link
          to="/mitigation-strategies"
          className={(active) => `${active ? "bg-surface-darker" : "bg-surface"} border-4 px-2`}
        >
          <h3 className="text-3xl">How to protect?</h3>
        </Link>
        <Link
          to="/test"
          className={(active) => `${active ? "bg-surface-darker" : "bg-surface"} border-4 px-2`}
        >
          <h3 className="text-3xl">Test your browser</h3>
        </Link>
      </nav>
      <main className="box-border flex h-screen w-screen flex-col items-center justify-center gap-8 p-8 pt-14">
        {children}
      </main>
    </>
  );
};

export default Layout;
