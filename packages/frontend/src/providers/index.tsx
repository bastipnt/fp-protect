import { ReactNode } from "react";
import DeviceDetectionProvider from "./DeviceDetectionProvider";

type Props = {
  children: ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
  return <DeviceDetectionProvider>{children}</DeviceDetectionProvider>;
};

export default Provider;
