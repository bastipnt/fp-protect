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
        `${active ? "border-2" : ""} text-default sm:text-md font-heading flex flex-col justify-center border-dashed p-1 text-center sm:p-2`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
