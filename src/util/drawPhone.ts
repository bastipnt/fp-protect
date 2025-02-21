import phoneIcon from "../assets/illustrations/Phone-Icon.svg";
import { Elements } from "../pages/Info";
import {
  drawImageLeft,
  drawLineToElement,
  getParentDimensions,
  loadImage,
  scaleImageFactor,
} from "./drawing";
import { getPhoneScale, OFFSET } from "./iconSpecs";

export const drawPhone = async (ctx: CanvasRenderingContext2D): Promise<HTMLImageElement> => {
  const phoneImg = await loadImage(phoneIcon);
  scaleImageFactor(phoneImg, getPhoneScale(ctx.canvas));
  drawImageLeft(ctx, phoneImg);
  return phoneImg;
};

export const drawPhoneLines = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  elements: Elements,
) => {
  const strokeColor = getComputedStyle(document.body).getPropertyValue("--color-stroke");
  const dangerColor = getComputedStyle(document.body).getPropertyValue("--color-danger");

  ctx.lineWidth = 4;
  ctx.strokeStyle = strokeColor;

  const { height } = getParentDimensions(ctx.canvas);

  const phoneHeight = img.height;

  const x = OFFSET + img.width - 2;
  const y = (height - img.height) / 2;

  const numLeft = Object.keys(elements).length;

  Object.values(elements).forEach((el, i) => {
    if (el === null) return;
    const startY = y + (phoneHeight / (numLeft + 2)) * (i + 1);
    drawLineToElement(ctx, x, startY, el);
  });

  const dangerX = x;
  const dangerY = y + (img.height / (numLeft + 2)) * 5;

  ctx.strokeStyle = dangerColor;
  if (elements.fpTrackingEl === null) return;

  drawLineToElement(ctx, dangerX, dangerY, elements.fpTrackingEl);
};
