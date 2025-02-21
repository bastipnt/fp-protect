import { ReactNode } from "react";
import ResponsivenessProvider from "./responsivenessProvider";

type Props = {
  children: ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
  return <ResponsivenessProvider>{children}</ResponsivenessProvider>;
};

export default Provider;
