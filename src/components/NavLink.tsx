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
        `${active ? "text-lg sm:text-xl" : "sm:text-md"} font-heading text-default flex flex-col justify-center text-center`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
