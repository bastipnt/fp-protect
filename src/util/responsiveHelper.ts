import { UAParser } from "ua-parser-js";

export const BREAKPOINT_SM = 640; // 40rem (640px)

export const calcIsMobileSize = () => window.innerWidth < BREAKPOINT_SM;

export const detectIsMobile = (): boolean => {
  const userAgentString = navigator.userAgent;

  const { device } = UAParser(userAgentString);
  return device.is("mobile");
};

/**
 * Detect if brave browser
 * @returns true if browser is brave
 * @see https://www.ctrl.blog/entry/brave-user-agent-detection.html
 */
export const detectIsBraveBrowser = () =>
  "brave" in window.navigator && window.navigator.brave?.isBrave?.name === "isBrave";

/**
 * Detect vivaldi
 * @returns true if browser is vivaldi
 * @see https://stackoverflow.com/questions/68659729/how-to-detect-clients-web-browser-is-vivaldi
 */
export const detectVivaldiBrowser = async () => {
  if (!window.chrome || !window.chrome.tabs || !window.chrome.tabs.query) return false;
  const tabs = await window.chrome.tabs.query({ active: true, currentWindow: true });
  if (!tabs || tabs.length === 0) return false;
  return "vivExtData" in tabs[0];
};
