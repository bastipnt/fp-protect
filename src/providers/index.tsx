import { ReactNode } from "react";
import DeviceProvider from "./deviceProvider";

type Props = {
  children: ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
  return <DeviceProvider>{children}</DeviceProvider>;
};

export default Provider;
