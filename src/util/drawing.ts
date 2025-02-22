import { OFFSET } from "./iconSpecs";
import { calcIsMobileSize } from "./responsiveHelper";

export const getParentDimensions = (canvas: HTMLCanvasElement) => ({
  width: canvas.parentElement?.offsetWidth || window.innerWidth,
  height: canvas.parentElement?.offsetHeight || window.innerHeight,
});

export const getAspecRatioFromImg = (img: HTMLImageElement) => img.height / img.width;

export const getAspecRatio = (w: number, h: number) => h / w;

export const getScale = (origSize: number, newSize: number) => newSize / origSize;

export const resizeCanvas = (canvasEl: HTMLCanvasElement | null) => {
  if (canvasEl === null) return;
  const { width, height } = getParentDimensions(canvasEl);
  canvasEl.width = width;
  canvasEl.height = height;
};

export const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve) => {
    const computerImg = new Image();
    computerImg.onload = () => resolve(computerImg);
    computerImg.src = src;
  });

export const scaleImage = (img: HTMLImageElement, scale: number) => {
  img.width *= scale;
  img.height *= scale;
};

export const scaleImageFactor = (img: HTMLImageElement, factor: number) => {
  img.width = img.width * factor;
  img.height = img.height * factor;
};

export const drawImage = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
): [number, number] => {
  const isMobileSize = calcIsMobileSize();
  const { width, height } = ctx.canvas;
  const imgWidth = img.width;
  const imgHeight = img.height;

  const offsetX = isMobileSize ? OFFSET : (width - imgWidth) / 2;
  const offsetY = (height - imgHeight) / 2;

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
  ctx.restore();

  return [offsetX, offsetY];
};

export const drawImageLeft = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
  const height = ctx.canvas.height;
  const imgWidth = img.width;
  const imgHeight = img.height;

  ctx.save();
  ctx.translate(OFFSET, (height - imgHeight) / 2);
  ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
  ctx.restore();
};

export const drawLineToElement = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  el: HTMLElement,
) => {
  let endX = el.offsetLeft;
  const endY = el.offsetTop + el.offsetHeight / 2;

  if (ctx.canvas.offsetWidth / 3 > el.offsetLeft) {
    endX = el.offsetLeft + el.offsetWidth;
  }

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x + ((endX - x) * 2) / 3, y, x, endY, endX, endY);
  ctx.stroke();
};
