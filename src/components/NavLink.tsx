import { ReactNode } from "react";
import { Link } from "wouter";

type Props = {
  children: ReactNode;
  to: string;
};

const NavLink: React.FC<Props> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className={(active) =>
        `${active ? "text-xl sm:text-2xl md:text-3xl" : "text-md sm:text-lg md:text-xl"} font-heading text-default flex flex-col justify-center text-center`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
