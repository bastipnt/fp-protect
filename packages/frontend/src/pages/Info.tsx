import { useRef } from "react";
import computerIcon from "../assets/illustrations/Computer-Icon.svg";
import Card from "../components/Card";
import useCanvas from "../hooks/useCanvas";
import {
  drawImageCenter,
  drawLineToElement,
  getDimensions,
  getScale,
  loadImage,
  scaleImage,
} from "../util/drawing";

const COMPUTER_ICON_ORIG_W = 83;

// const COMPUTER_ICON_BROWSER_ORIG_W = 36;
const COMPUTER_ICON_BROWSER_ORIG_H = 24;

const COMPUTER_ICON_BROWSER_ORIG_X = 29;
const COMPUTER_ICON_BROWSER_ORIG_Y = 12;

const Info: React.FC = () => {
  const { canvasRef, drawRef } = useCanvas();
  const ipTrackingRef = useRef<HTMLDivElement>(null);
  const pixelTrackingRef = useRef<HTMLDivElement>(null);
  const cookieTrackingRef = useRef<HTMLDivElement>(null);

  const drawLines = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    if (ipTrackingRef.current === null) return;
    if (pixelTrackingRef.current === null) return;
    if (cookieTrackingRef.current === null) return;

    const strokeColor = getComputedStyle(document.body).getPropertyValue("--color-stroke");
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 4;

    const elementsLeft = [
      ipTrackingRef.current,
      pixelTrackingRef.current,
      cookieTrackingRef.current,
    ];

    const { width, height } = getDimensions();
    const scale = getScale(COMPUTER_ICON_ORIG_W, width / 3);

    const iconH = COMPUTER_ICON_BROWSER_ORIG_H * scale;

    const x = (width - img.width) / 2 + COMPUTER_ICON_BROWSER_ORIG_X * scale + 2;
    const y = (height - img.height) / 2 + COMPUTER_ICON_BROWSER_ORIG_Y * scale;

    const numLeft = elementsLeft.length;

    elementsLeft.forEach((el, i) => {
      const startY = y + (iconH / (numLeft + 1)) * (i + 1);
      drawLineToElement(ctx, x, startY, el);
    });
  };

  drawRef.current = async (ctx: CanvasRenderingContext2D) => {
    const { width, height } = getDimensions();

    const computerImg = await loadImage(computerIcon);
    ctx.clearRect(0, 0, width, height);

    scaleImage(computerImg, width / 3);
    drawImageCenter(ctx, computerImg);

    drawLines(ctx, computerImg);
  };

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 h-screen w-screen"></canvas>
      <section className="grid h-full w-full grid-cols-3 grid-rows-[100px_1fr_100px] p-8">
        <div className="row-start-2 flex flex-col justify-between">
          <Card titleRef={ipTrackingRef} title="IP Tracking">
            <p>Is asdfb asdf adsfa asdf asdf asdf asdffgadg asdfasdf asdf.</p>
          </Card>

          <Card titleRef={pixelTrackingRef} title="Tracking Pixels">
            <p>Is asdfb asdf adsfa asdf asdf asdf asdffgadg asdfasdf asdf.</p>
          </Card>

          <Card titleRef={cookieTrackingRef} title="Cookies">
            <p>Is asdfb asdf adsfa asdf asdf asdf asdffgadg asdfasdf asdf.</p>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Info;
