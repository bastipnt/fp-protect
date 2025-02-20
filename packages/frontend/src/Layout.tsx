import { useContext, type ReactNode } from "react";
import { Link } from "wouter";
import { ResponsivenessContext } from "./providers/responsivenessProvider";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { isMobileSize } = useContext(ResponsivenessContext);

  return (
    <>
      <nav className="fixed top-(--phone-nav-top) left-(--phone-nav-left) flex h-(--phone-nav-h) w-(--phone-nav-w) flex-row justify-center gap-2 p-2 py-3 sm:top-0 sm:left-0 sm:h-auto sm:w-screen sm:gap-4 sm:p-4">
        <Link
          to="/"
          className={(active) =>
            `${active ? "bg-surface-darker hidden sm:block" : "sm:bg-surface"} bg-primary flex flex-col justify-center rounded-3xl border-4 text-center sm:rounded-none sm:px-2`
          }
        >
          <h3 className="text-lg sm:text-3xl">Web Tracking</h3>
        </Link>{" "}
        <Link
          to="/mitigation-strategies"
          className={(active) =>
            `${active ? "bg-surface-darker hidden sm:block" : "sm:bg-surface"} bg-primary flex flex-col justify-center rounded-3xl border-4 text-center sm:rounded-none sm:px-2`
          }
        >
          <h3 className="text-lg sm:text-3xl">
            {isMobileSize ? "Protect yourself" : "How to protect yourself?"}
          </h3>
        </Link>
        <Link
          to="/test"
          className={(active) =>
            `${active ? "bg-surface-darker hidden sm:block" : "sm:bg-surface"} bg-primary flex flex-col justify-center rounded-3xl border-4 text-center sm:rounded-none sm:px-2`
          }
        >
          <h3 className="text-lg sm:text-3xl">Test your browser</h3>
        </Link>
      </nav>

      <main className="box-border flex h-screen w-screen flex-col items-center justify-center gap-8 p-8 pt-14">
        {children}
      </main>
    </>
  );
};

export default Layout;
