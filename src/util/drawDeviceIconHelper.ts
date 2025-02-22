import computerIcon from "../assets/illustrations/Computer-Icon.svg";
import phoneIcon from "../assets/illustrations/Phone-Icon.svg";
import { TrackingMethodElements } from "../pages/Info";
import { drawImage, drawLineToElement, loadImage, scaleImage } from "./drawing";
import { calcScale, getScaledIconAnchors } from "./iconSpecs";
import { calcIsMobileSize, detectIsMobile } from "./responsiveHelper";

export const drawDeviceIcon = async (
  ctx: CanvasRenderingContext2D,
  trackingMethodElements: TrackingMethodElements,
) => {
  const isMobile = detectIsMobile();
  const scale = calcScale(ctx.canvas);
  const iconImg = await loadImage(isMobile ? phoneIcon : computerIcon);

  scaleImage(iconImg, scale);
  const offset = drawImage(ctx, iconImg);

  drawLines(ctx, trackingMethodElements, scale, offset);
};

const drawLines = (
  ctx: CanvasRenderingContext2D,
  elements: TrackingMethodElements,
  scale: number,
  offset: [number, number],
) => {
  const strokeColor = getComputedStyle(document.body).getPropertyValue("--color-stroke");
  const dangerColor = getComputedStyle(document.body).getPropertyValue("--color-danger");

  ctx.lineWidth = 4;
  ctx.strokeStyle = strokeColor;

  const isMobileSize = calcIsMobileSize();
  const isMobile = detectIsMobile();
  const iconAnchors = getScaledIconAnchors(scale, offset);

  const [x, y] = isMobileSize ? iconAnchors.browserRightStart : iconAnchors.browserLeftStart;
  const browserEndH = isMobileSize ? iconAnchors.browserRightEnd[1] : iconAnchors.browserLeftEnd[1];
  const browserH = browserEndH - y;

  let numLines = isMobileSize ? elements.left.length + 1 : elements.left.length;
  if (isMobile) numLines += 1;

  elements.left.forEach(({ el }, i) => {
    const startY = y + (browserH / (numLines + 1)) * (i + 1);
    if (el === null) return;
    drawLineToElement(ctx, x, startY, el);
  });

  const rightEl = elements.right.el;
  if (rightEl === null) return;

  const spacing = (browserH / (numLines + 1)) * (isMobile ? 2 : 1);

  const [browserRightX, browserRightBottom] = iconAnchors.browserRightEnd;
  const browserRightY = isMobileSize
    ? browserRightBottom - spacing
    : browserRightBottom - browserH / 2;

  drawLineToElement(ctx, browserRightX, browserRightY, rightEl);

  ctx.strokeStyle = dangerColor;

  if (isMobile) {
    drawLineToElement(ctx, browserRightX, browserRightY + spacing / 2, rightEl);
    return;
  }

  if (!("screenRight" in iconAnchors) || !("computerRight" in iconAnchors)) return;

  const [screenX, screenY] = iconAnchors.screenRight;
  drawLineToElement(ctx, screenX, screenY, rightEl);

  const [computerX, computerY] = iconAnchors.computerRight;
  drawLineToElement(ctx, computerX, computerY, rightEl);
};
