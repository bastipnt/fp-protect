export const getDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const getAspecRatio = (img: HTMLImageElement) => img.height / img.width;

export const getScale = (origW: number, newW: number) => newW / origW;

export const resizeCanvas = (canvasEl: HTMLCanvasElement | null) => {
  if (canvasEl === null) return;
  const { width, height } = getDimensions();
  canvasEl.width = width;
  canvasEl.height = height;
};

export const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve) => {
    const computerImg = new Image();
    computerImg.onload = () => resolve(computerImg);
    computerImg.src = src;
  });

export const scaleImage = (img: HTMLImageElement, newWidth: number) => {
  const imgNewWidth = newWidth;
  const imgNewHeight = getAspecRatio(img) * imgNewWidth;
  img.width = imgNewWidth;
  img.height = imgNewHeight;
};

export const drawImageCenter = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const imgWidth = img.width;
  const imgHeight = img.height;

  ctx.save();
  ctx.translate((width - imgWidth) / 2, (height - imgHeight) / 2);
  ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
  ctx.restore();
};

export const drawLineToElement = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  el: HTMLElement,
  side: "left" | "right" = "right",
) => {
  let endX = el.offsetLeft + el.offsetWidth;
  const endY = el.offsetTop + el.offsetHeight / 2;

  if (side === "left") {
    endX = el.offsetLeft;
  }

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};
