import { getScale } from "./drawing";

export const COMPUTER_WIDTH_SCALE = 0.17;
const PHONE_SCALE = 0.5;
export const OFFSET = 16;

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
  browserNavW: 52,
  browserNavH: 15,
  browserNavY: 102,
  browserNavX: 4,
  browserW: 52,
  browserH: 114 - 17 - 8,
  browserX: 4,
  browserY: 3,
};

const getPhoneAspecRatio = () => phoneIconSpecs.w / phoneIconSpecs.h;
const getElAspecRatio = (canvas: HTMLCanvasElement) => canvas.offsetWidth / canvas.offsetHeight;

export const getPhoneScale = (canvas: HTMLCanvasElement) => {
  if (getPhoneAspecRatio() < getElAspecRatio(canvas)) {
    const newHeight = canvas.offsetHeight * PHONE_SCALE;
    return getScale(phoneIconSpecs.h, newHeight);
  }

  const newWidth = canvas.offsetWidth * PHONE_SCALE;
  return getScale(phoneIconSpecs.w, newWidth);
};

// export const calculateMobileTop = () => {
//   const scale = getPhoneScale();
//   return (
//     (window.innerHeight - phoneIconSpecs.h * scale) / 2 +
//     phoneIconSpecs.browserY * scale +
//     phoneIconSpecs.cameraH * scale
//   );
// };

// export const calculateMobileLeft = () => {
//   const scale = getPhoneScale();
//   return (window.innerWidth - phoneIconSpecs.w * scale) / 2 + phoneIconSpecs.browserX * scale;
// };

// export const calculateMobileWidth = () => {
//   const scale = getPhoneScale();
//   return phoneIconSpecs.browserW * scale;
// };

// export const calculateMobileHeight = () => {
//   const scale = getPhoneScale();
//   return phoneIconSpecs.browserH * scale;
// };

// export const getPhoneBrowserDimensions = () => ({
//   top: calculateMobileTop(),
//   left: calculateMobileLeft(),
//   width: calculateMobileWidth(),
//   height: calculateMobileHeight(),
// });

// export const setPhoneBrowserDimensions = () => {
//   document.documentElement.style.setProperty("--phone-browser-w", `${calculateMobileWidth()}px`);
//   document.documentElement.style.setProperty("--phone-browser-h", `${calculateMobileHeight()}px`);
//   document.documentElement.style.setProperty("--phone-browser-top", `${calculateMobileTop()}px`);
//   document.documentElement.style.setProperty("--phone-browser-left", `${calculateMobileLeft()}px`);
// };

// export const setPhoneNavDimensions = () => {
//   const { width, height } = getParentDimentions();
//   const scale = getPhoneScale();

//   const navTop = (height - phoneIconSpecs.h * scale) / 2 + phoneIconSpecs.browserNavY * scale;
//   const navLeft = (width - phoneIconSpecs.w * scale) / 2 + phoneIconSpecs.browserNavX * scale;
//   const navW = phoneIconSpecs.browserNavW * scale;
//   const navH = phoneIconSpecs.browserNavH * scale;

//   document.documentElement.style.setProperty("--phone-nav-w", `${navW}px`);
//   document.documentElement.style.setProperty("--phone-nav-h", `${navH}px`);
//   document.documentElement.style.setProperty("--phone-nav-top", `${navTop}px`);
//   document.documentElement.style.setProperty("--phone-nav-left", `${navLeft}px`);
// };
