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
        `${active ? "text-lg sm:text-xl md:text-2xl" : "sm:text-md md:text-lg"} font-heading text-default flex flex-col justify-center text-center`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
