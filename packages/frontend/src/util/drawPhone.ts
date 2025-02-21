import phoneIcon from "../assets/illustrations/Phone-Icon-2.svg";
import { drawImageCenter, loadImage, scaleImageFactor } from "./drawing";
import { getPhoneScale } from "./iconSpecs";

export const drawPhone = async (ctx: CanvasRenderingContext2D): Promise<HTMLImageElement> => {
  const phoneImg = await loadImage(phoneIcon);
  scaleImageFactor(phoneImg, getPhoneScale());
  drawImageCenter(ctx, phoneImg);
  return phoneImg;
};
