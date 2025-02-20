import phoneIcon from "../assets/illustrations/Phone-Icon-2.svg";
import {
  drawImageCenter,
  drawLineToElement,
  getDimensions,
  getScale,
  loadImage,
  scaleImage,
} from "./drawing";
import { computerIconSpecs, PHONE_HEIGHT_SCALE } from "./iconSpecs";

type Elements = {
  ipTrackingEl: HTMLDivElement | null;
  pixelTrackingEl: HTMLDivElement | null;
  cookieTrackingEl: HTMLDivElement | null;
  fpTrackingEl: HTMLDivElement | null;
};

export const drawPhone = async (ctx: CanvasRenderingContext2D): Promise<HTMLImageElement> => {
  const { height } = getDimensions();
  const phoneImg = await loadImage(phoneIcon);
  scaleImage(phoneImg, height * PHONE_HEIGHT_SCALE, true);
  drawImageCenter(ctx, phoneImg);
  return phoneImg;
};

export const drawPhoneLines = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  elements: Elements,
) => {
  if (elements.ipTrackingEl === null) return;
  if (elements.pixelTrackingEl === null) return;
  if (elements.cookieTrackingEl === null) return;
  if (elements.fpTrackingEl === null) return;

  const strokeColor = getComputedStyle(document.body).getPropertyValue("--color-stroke");
  const dangerColor = getComputedStyle(document.body).getPropertyValue("--color-danger");

  ctx.lineWidth = 4;

  ctx.strokeStyle = strokeColor;

  const elementsLeft = [elements.ipTrackingEl, elements.pixelTrackingEl, elements.cookieTrackingEl];

  const { width, height } = getDimensions();
  const scale = getScale(computerIconSpecs.W, width * PHONE_HEIGHT_SCALE);

  const iconH = computerIconSpecs.browserH * scale;

  const x = (width - img.width) / 2 + computerIconSpecs.browserX * scale + 2;
  const y = (height - img.height) / 2 + computerIconSpecs.browserY * scale;

  const numLeft = elementsLeft.length;

  elementsLeft.forEach((el, i) => {
    const startY = y + (iconH / (numLeft + 1)) * (i + 1);
    drawLineToElement(ctx, x, startY, el);
  });

  const rightX1 =
    (width - img.width) / 2 + (computerIconSpecs.browserX + computerIconSpecs.browserW) * scale - 1;
  const rightY1 = y + 8;

  drawLineToElement(ctx, rightX1, rightY1, elements.fpTrackingEl, "left");

  ctx.strokeStyle = dangerColor;

  const rightX2 = (width + img.width) / 2 - computerIconSpecs.windowXRight * scale;
  const rightY2 =
    (height - img.height) / 2 +
    computerIconSpecs.windowY * scale +
    (computerIconSpecs.windowH * scale) / 1.3;

  drawLineToElement(ctx, rightX2, rightY2, elements.fpTrackingEl, "left");

  const rightX3 = (width + img.width) / 2 - 1;
  const rightY3 =
    (height - img.height) / 2 +
    computerIconSpecs.boxY * scale +
    (computerIconSpecs.boxH * scale) / 2;

  drawLineToElement(ctx, rightX3, rightY3, elements.fpTrackingEl, "left");
};
