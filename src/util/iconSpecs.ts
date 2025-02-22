import { detectIsMobile } from "./responsiveHelper";

type Size = [number, number];

const COMPUTER_SCALE = 0.5;
const PHONE_SCALE = 0.5;

export const OFFSET = 16;

const computerIconAnchors = {
  browserLeftStart: [29, 12],
  browserLeftEnd: [29, 36],

  browserRightStart: [65, 12],
  browserRightEnd: [65, 36],

  screenRight: [75, 38],

  computerRight: [83, 64],
};

const computerIconSize: Size = [83, 76];
const phoneIconSize: Size = [62, 120];

const phoneIconAnchors = {
  browserLeftStart: [1, 8],
  browserLeftEnd: [1, 112],

  browserRightStart: [61, 8],
  browserRightEnd: [61, 112],
};

export type IconAnchors = typeof computerIconAnchors | typeof phoneIconAnchors;

export const getScaledIconAnchors = (scale: number, offset: [number, number]): IconAnchors => {
  const isMobile = detectIsMobile();
  const iconAnchors = isMobile ? phoneIconAnchors : computerIconAnchors;

  return Object.entries(iconAnchors).reduce((scaledAnchors, [name, [x, y]]) => {
    return { ...scaledAnchors, [name]: [x * scale + offset[0], y * scale + offset[1]] };
  }, iconAnchors);
};

const calcAspectRatio = ([w, h]: Size) => w / h;

export const calcScale = (canvas: HTMLCanvasElement) => {
  const isMobile = detectIsMobile();
  const iconSize = isMobile ? phoneIconSize : computerIconSize;
  const baseScale = isMobile ? PHONE_SCALE : COMPUTER_SCALE;

  const canvasAspectRatio = calcAspectRatio([canvas.width, canvas.height]);
  const iconAspectRatio = calcAspectRatio(iconSize);

  if (iconAspectRatio < canvasAspectRatio) {
    const newHeight = canvas.height * baseScale;
    return newHeight / iconSize[1];
  }

  const newWidth = canvas.width * baseScale;
  return newWidth / iconSize[0];
};
