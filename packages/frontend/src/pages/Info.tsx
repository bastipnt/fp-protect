import { useRef } from "react";
import { Link } from "wouter";
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

const ICON_WIDTH_SCALE = 4;
const COMPUTER_ICON_ORIG_W = 83;

const COMPUTER_ICON_BROWSER_ORIG_W = 36;
const COMPUTER_ICON_BROWSER_ORIG_H = 24;
const COMPUTER_ICON_BROWSER_ORIG_X = 29;
const COMPUTER_ICON_BROWSER_ORIG_Y = 12;

const COMPUTER_ICON_WINDOW_ORIG_X_RIGHT = 8;
const COMPUTER_ICON_WINDOW_ORIG_Y = 5;
const COMPUTER_ICON_WINDOW_ORIG_H = 38;

const COMPUTER_ICON_BOX_ORIG_Y = 53;
const COMPUTER_ICON_BOX_ORIG_H = 23;

const Info: React.FC = () => {
  const { canvasRef, drawRef } = useCanvas();
  const ipTrackingRef = useRef<HTMLDivElement>(null);
  const pixelTrackingRef = useRef<HTMLDivElement>(null);
  const cookieTrackingRef = useRef<HTMLDivElement>(null);
  const fpTrackingRef = useRef<HTMLDivElement>(null);

  const drawLines = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    if (ipTrackingRef.current === null) return;
    if (pixelTrackingRef.current === null) return;
    if (cookieTrackingRef.current === null) return;
    if (fpTrackingRef.current === null) return;

    const strokeColor = getComputedStyle(document.body).getPropertyValue("--color-stroke");
    const dangerColor = getComputedStyle(document.body).getPropertyValue("--color-danger");

    console.log("draw", strokeColor, dangerColor);

    ctx.lineWidth = 4;

    ctx.strokeStyle = strokeColor;

    const elementsLeft = [
      ipTrackingRef.current,
      pixelTrackingRef.current,
      cookieTrackingRef.current,
    ];

    const { width, height } = getDimensions();
    const scale = getScale(COMPUTER_ICON_ORIG_W, width / ICON_WIDTH_SCALE);

    const iconH = COMPUTER_ICON_BROWSER_ORIG_H * scale;

    const x = (width - img.width) / 2 + COMPUTER_ICON_BROWSER_ORIG_X * scale + 2;
    const y = (height - img.height) / 2 + COMPUTER_ICON_BROWSER_ORIG_Y * scale;

    const numLeft = elementsLeft.length;

    elementsLeft.forEach((el, i) => {
      const startY = y + (iconH / (numLeft + 1)) * (i + 1);
      drawLineToElement(ctx, x, startY, el);
    });

    const rightX1 =
      (width - img.width) / 2 +
      (COMPUTER_ICON_BROWSER_ORIG_X + COMPUTER_ICON_BROWSER_ORIG_W) * scale -
      1;
    const rightY1 = y + 8;

    drawLineToElement(ctx, rightX1, rightY1, fpTrackingRef.current, "left");

    ctx.strokeStyle = dangerColor;

    const rightX2 = (width + img.width) / 2 - COMPUTER_ICON_WINDOW_ORIG_X_RIGHT * scale;
    const rightY2 =
      (height - img.height) / 2 +
      COMPUTER_ICON_WINDOW_ORIG_Y * scale +
      (COMPUTER_ICON_WINDOW_ORIG_H * scale) / 1.3;

    drawLineToElement(ctx, rightX2, rightY2, fpTrackingRef.current, "left");

    const rightX3 = (width + img.width) / 2 - 1;
    const rightY3 =
      (height - img.height) / 2 +
      COMPUTER_ICON_BOX_ORIG_Y * scale +
      (COMPUTER_ICON_BOX_ORIG_H * scale) / 2;

    drawLineToElement(ctx, rightX3, rightY3, fpTrackingRef.current, "left");
  };

  drawRef.current = async (ctx: CanvasRenderingContext2D) => {
    const { width, height } = getDimensions();

    const computerImg = await loadImage(computerIcon);
    ctx.clearRect(0, 0, width, height);

    scaleImage(computerImg, width / ICON_WIDTH_SCALE);
    drawImageCenter(ctx, computerImg);

    drawLines(ctx, computerImg);
  };

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 h-screen w-screen"></canvas>
      <section className="grid h-full w-full grid-cols-[30vw_1fr_30vw] grid-rows-[100px_1fr_100px] p-8">
        <div className="row-span-3 flex flex-col justify-between">
          <Card titleRef={ipTrackingRef} title="IP Tracking">
            <p>Your IP-Address can be used to determine your aproximate geo location.</p>
            <p>Advertisers can use this to show you ads, that are relevant for your region.</p>
          </Card>

          <Card titleRef={pixelTrackingRef} title="Tracking Pixels">
            <p>Small images, that are loaded invisible on a website or in an email.</p>
            <p>
              The origin server of the image can log, that you visited that website or looked at a
              specific email.
            </p>
          </Card>

          <Card titleRef={cookieTrackingRef} title="Cookies">
            <p>Small data files stored in your browser.</p>
            <p>Third party cookies can be used to track you accross multiple websites.</p>
          </Card>
        </div>

        <div className="col-start-3 row-start-2 flex flex-col items-end justify-center">
          <Card titleRef={fpTrackingRef} title="Device Fingerprint">
            <p>
              Device fingerprinting, or also called browser fingerprinting, can identify you by
              combining different attributes from your browser and the device you are using.
            </p>
            <p>These attributes include for example:</p>
            <ul className="ml-4 list-disc">
              <li>Your screen size</li>
              <li>Your timezone</li>
              <li>Hardeware specifications</li>
              <li>And many more...</li>
            </ul>
            <p>This tracking method is very effective, because it is not easy to protect from.</p>
            <p>Luckily there are some things you can still do...</p>
            <Link
              to="/mitigation-strategies"
              className="bg-surface-darker text-bold font-heading cursor-pointer self-end border-4 px-2 text-lg"
            >
              Show me how to protect →
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Info;
