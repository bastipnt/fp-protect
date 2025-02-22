import { UAParser } from "ua-parser-js";

export const BREAKPOINT_SM = 640; // 40rem (640px)

export const calcIsMobileSize = () => window.innerWidth < BREAKPOINT_SM;

export const detectIsMobile = (): boolean => {
  const userAgentString = navigator.userAgent;

  const { device } = UAParser(userAgentString);
  return device.is("mobile");
};
