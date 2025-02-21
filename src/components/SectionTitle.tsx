import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionTitle: React.FC<Props> = ({ children }) => {
  return <span className="font-heading text-xl">{children}</span>;
};

export default SectionTitle;
