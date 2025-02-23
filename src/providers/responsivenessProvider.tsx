import { createContext, ReactNode, useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import {
  calcIsMobileSize,
  detectIsBraveBrowser,
  detectVivaldiBrowser,
} from "../util/responsiveHelper";

export const ResponsivenessContext = createContext<{
  isMobile: boolean;
  isMobileSize: boolean;
  browser?: string;
  os?: string;
}>({
  isMobile: false,
  isMobileSize: false,
  browser: undefined,
  os: undefined,
});

type Props = {
  children: ReactNode;
};

const ResponsivenessProvider: React.FC<Props> = ({ children }) => {
  const [isMobileSize, setIsMobileSize] = useState(false);

  const [browser, setBrowser] = useState<string>();
  const [os, setOs] = useState<string>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const detectBrowser = async () => {
    const userAgentString = navigator.userAgent;
    const isBrave = detectIsBraveBrowser();
    const isVivaldi = await detectVivaldiBrowser();
    const { browser: b, device, os: o } = UAParser(userAgentString);

    setIsMobile(device.is("mobile"));
    setOs(o.name);

    if (isBrave) setBrowser("Brave");
    else if (isVivaldi) setBrowser("Vivaldi");
    else setBrowser(b.name);
  };

  const handleResize = () => {
    setIsMobileSize(calcIsMobileSize());
  };

  useEffect(() => {
    detectBrowser();

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsivenessContext.Provider value={{ isMobile, isMobileSize, browser, os }}>
      {children}
    </ResponsivenessContext.Provider>
  );
};

export default ResponsivenessProvider;
