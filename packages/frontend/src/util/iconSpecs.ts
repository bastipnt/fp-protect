import { getScale } from "./drawing";

export const COMPUTER_WIDTH_SCALE = 0.17;
export const PHONE_HEIGHT_SCALE = 0.8;

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

const getMobileScale = () => {
  const newHeight = window.innerHeight * PHONE_HEIGHT_SCALE;
  return getScale(phoneIconSpecs.h, newHeight);
};

export const calculateMobileTop = () => {
  const scale = getMobileScale();
  return (
    (window.innerHeight - phoneIconSpecs.h * scale) / 2 +
    phoneIconSpecs.browserY * scale +
    phoneIconSpecs.cameraH * scale
  );
};

export const calculateMobileLeft = () => {
  const scale = getMobileScale();
  return (window.innerWidth - phoneIconSpecs.w * scale) / 2 + phoneIconSpecs.browserX * scale;
};

export const calculateMobileWidth = () => {
  const scale = getMobileScale();
  return phoneIconSpecs.browserW * scale;
};

export const calculateMobileHeight = () => {
  const scale = getMobileScale();
  return phoneIconSpecs.browserH * scale;
};

export const getPhoneBrowserDimensions = () => ({
  top: calculateMobileTop(),
  left: calculateMobileLeft(),
  width: calculateMobileWidth(),
  height: calculateMobileHeight(),
});
