import { getScale } from "./drawing";

export const COMPUTER_WIDTH_SCALE = 0.17;
const PHONE_SCALE = 0.9;

export const computerIconSpecs = {
  W: 83,
  browserW: 36,
  browserH: 24,
  browserX: 29,
  browserY: 12,
  windowXRight: 8,
  windowY: 5,
  windowH: 38,
  boxY: 53,
  boxH: 23,
};

export const phoneIconSpecs = {
  w: 61,
  h: 120,
  cameraH: 8,
  browserMenuH: 17,
  browserW: 52,
  browserH: 114 - 17 - 8,
  browserX: 4,
  browserY: 3,
};

const getPhoneAspecRatio = () => phoneIconSpecs.w / phoneIconSpecs.h;
const getWindowAspecRatio = () => window.innerWidth / window.innerHeight;

export const getPhoneScale = () => {
  if (getPhoneAspecRatio() < getWindowAspecRatio()) {
    const newHeight = window.innerHeight * PHONE_SCALE;
    return getScale(phoneIconSpecs.h, newHeight);
  }

  const newWidth = window.innerWidth * PHONE_SCALE;
  return getScale(phoneIconSpecs.w, newWidth);
};

export const calculateMobileTop = () => {
  const scale = getPhoneScale();
  return (
    (window.innerHeight - phoneIconSpecs.h * scale) / 2 +
    phoneIconSpecs.browserY * scale +
    phoneIconSpecs.cameraH * scale
  );
};

export const calculateMobileLeft = () => {
  const scale = getPhoneScale();
  return (window.innerWidth - phoneIconSpecs.w * scale) / 2 + phoneIconSpecs.browserX * scale;
};

export const calculateMobileWidth = () => {
  const scale = getPhoneScale();
  return phoneIconSpecs.browserW * scale;
};

export const calculateMobileHeight = () => {
  const scale = getPhoneScale();
  return phoneIconSpecs.browserH * scale;
};

export const getPhoneBrowserDimensions = () => ({
  top: calculateMobileTop(),
  left: calculateMobileLeft(),
  width: calculateMobileWidth(),
  height: calculateMobileHeight(),
});

export const setPhoneBrowserDimensions = () => {
  document.documentElement.style.setProperty("--phone-browser-w", `${calculateMobileWidth()}px`);
  document.documentElement.style.setProperty("--phone-browser-h", `${calculateMobileHeight()}px`);
  document.documentElement.style.setProperty("--phone-browser-top", `${calculateMobileTop()}px`);
  document.documentElement.style.setProperty("--phone-browser-left", `${calculateMobileLeft()}px`);
};
