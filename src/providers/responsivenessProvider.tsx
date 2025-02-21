import { createContext, ReactNode, useEffect, useState } from "react";
import { setPhoneBrowserDimensions, setPhoneNavDimensions } from "../util/iconSpecs";
import { calcIsMobileSize, detectMobileDevice } from "../util/responsiveHelper";

export const ResponsivenessContext = createContext<{
  isMobile: boolean;
  isMobileSize: boolean;
}>({
  isMobile: false,
  isMobileSize: false,
});

type Props = {
  children: ReactNode;
};

const ResponsivenessProvider: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);

  const handleResize = () => {
    setIsMobileSize(calcIsMobileSize());
    setPhoneBrowserDimensions();
    setPhoneNavDimensions();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMobile(detectMobileDevice());
  }, [isMobileSize]);

  return (
    <ResponsivenessContext.Provider value={{ isMobile, isMobileSize }}>
      {children}
    </ResponsivenessContext.Provider>
  );
};

export default ResponsivenessProvider;
