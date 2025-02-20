import { useContext, useRef } from "react";
import { Link } from "wouter";
import Card from "../components/Card";
import useCanvas from "../hooks/useCanvas";
import { DeviceDetectionContext } from "../providers/deviceDetectionProvider";
import { drawComputer, drawComputerLines } from "../util/drawComputer";
import { getDimensions } from "../util/drawing";
import { drawPhone, drawPhoneLines } from "../util/drawPhone";

const Info: React.FC = () => {
  const { canvasRef, drawRef } = useCanvas();
  const ipTrackingRef = useRef<HTMLDivElement>(null);
  const pixelTrackingRef = useRef<HTMLDivElement>(null);
  const cookieTrackingRef = useRef<HTMLDivElement>(null);
  const fpTrackingRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useContext(DeviceDetectionContext);

  drawRef.current = async (ctx: CanvasRenderingContext2D) => {
    const { width, height } = getDimensions();
    ctx.clearRect(0, 0, width, height);

    if (isMobile) {
      const phoneImg = await drawPhone(ctx);

      drawPhoneLines(ctx, phoneImg, {
        ipTrackingEl: ipTrackingRef.current,
        pixelTrackingEl: pixelTrackingRef.current,
        cookieTrackingEl: cookieTrackingRef.current,
        fpTrackingEl: fpTrackingRef.current,
      });
    } else {
      const computerImg = await drawComputer(ctx);

      drawComputerLines(ctx, computerImg, {
        ipTrackingEl: ipTrackingRef.current,
        pixelTrackingEl: pixelTrackingRef.current,
        cookieTrackingEl: cookieTrackingRef.current,
        fpTrackingEl: fpTrackingRef.current,
      });
    }
  };

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 h-screen w-screen"></canvas>
      <section className="grid h-full max-h-[700px] w-full grid-cols-[30vw_1fr_30vw] grid-rows-[100px_1fr_100px] p-8">
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
