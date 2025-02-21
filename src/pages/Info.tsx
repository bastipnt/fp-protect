import { useRef } from "react";
import { Link } from "wouter";
import Reference from "../components/Reference";
import ReferenceList from "../components/ReferenceList";
import useCanvas from "../hooks/useCanvas";
import { useReferences } from "../hooks/useReferences";
import { drawComputer, drawComputerLines } from "../util/drawComputer";
import { getParentDimentions } from "../util/drawing";
import { drawPhone, drawPhoneLines } from "../util/drawPhone";
import { calcIsMobileSize } from "../util/responsiveHelper";

export type Elements = {
  ipTrackingEl: HTMLLIElement | null;
  pixelTrackingEl: HTMLLIElement | null;
  cookieTrackingEl: HTMLLIElement | null;
  fpTrackingEl: HTMLLIElement | null;
};

const Info: React.FC = () => {
  const { canvasRef, drawRef } = useCanvas();
  const ipTrackingRef = useRef<HTMLLIElement>(null);
  const pixelTrackingRef = useRef<HTMLLIElement>(null);
  const cookieTrackingRef = useRef<HTMLLIElement>(null);
  const fpTrackingRef = useRef<HTMLLIElement>(null);

  const { references, getReferencesForBlock } = useReferences();

  references.current = [
    { name: "WebTrackingWikipedia", block: "1" },
    { name: "DigitalAdvertisingRevenue", block: "1" },
  ];

  drawRef.current = async (ctx: CanvasRenderingContext2D) => {
    const { width, height } = getParentDimentions(ctx.canvas);
    ctx.clearRect(0, 0, width, height);

    if (calcIsMobileSize()) {
      const phoneImg = await drawPhone(ctx);

      drawPhoneLines(ctx, phoneImg, {
        ipTrackingEl: ipTrackingRef.current,
        pixelTrackingEl: pixelTrackingRef.current,
        cookieTrackingEl: cookieTrackingRef.current,
        fpTrackingEl: fpTrackingRef.current,
      });
      return;
    }

    const computerImg = await drawComputer(ctx);

    drawComputerLines(ctx, computerImg, {
      ipTrackingEl: ipTrackingRef.current,
      pixelTrackingEl: pixelTrackingRef.current,
      cookieTrackingEl: cookieTrackingRef.current,
      fpTrackingEl: fpTrackingRef.current,
    });
  };

  return (
    <>
      <section className="flex w-150 max-w-screen flex-col gap-2 px-4 py-8 sm:px-8 sm:py-12">
        <p>
          <span className="font-heading text-xl">Web Tracking</span> refers to the practice of
          monitoring and recording your online activities
          <Reference referenceName="WebTrackingWikipedia" references={references.current} />.
        </p>
        <p>
          Advertising companies like <code>Google</code> or <code>Meta</code> gain billions of
          dollars by using your data for targeted advertisement
          <Reference referenceName="DigitalAdvertisingRevenue" references={references.current} />.
        </p>
        <p>Lukily there are things you can do to protect your data.</p>
        <p>This website aims to help you learn more about web tracking and how to mitigate it.</p>
        <p>There is also a self test, to see how well you are protected.</p>
        <p>
          If you liked this website, please consider taking part in this short{" "}
          <a className="link" href="https://tracking-survey.bastipnt.de/?ref=test" target="_blank">
            survey
          </a>{" "}
          for my masters thesis. Thanks!!!
        </p>
        <ReferenceList references={getReferencesForBlock("1")} />
      </section>

      <section className="bg-primary flex w-full flex-col items-center gap-8 border-y-4 border-dashed py-8 sm:gap-12 sm:py-12">
        <div className="flex w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            There are multiple different{" "}
            <span className="font-heading text-xl">Tracking Methods</span>.
          </p>
          <p>Some you may already heard of, some maybe new to you.</p>
          <p>The most common ones are:</p>
        </div>

        <div className="felx-col relative flex min-h-80 w-screen max-w-250 justify-items-stretch p-4 sm:p-8">
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute top-0 left-0 h-full w-full"
          ></canvas>
          <ul className="flex w-full flex-col items-end justify-between gap-4 sm:grid sm:grid-cols-3 sm:grid-rows-3 sm:justify-items-start">
            <li
              className="font-heading col-start-2 w-fit p-2 text-right sm:col-start-1 sm:row-start-1 sm:text-left sm:text-2xl"
              ref={ipTrackingRef}
            >
              IP Tracking
            </li>
            <li
              className="font-heading col-start-2 w-fit p-2 text-right sm:col-start-1 sm:row-start-2 sm:text-left sm:text-2xl"
              ref={pixelTrackingRef}
            >
              Tracking Pixels
            </li>
            <li
              className="font-heading col-start-2 w-fit p-2 text-right sm:col-start-1 sm:row-start-3 sm:text-left sm:text-2xl"
              ref={cookieTrackingRef}
            >
              Cookies
            </li>
            <li
              className="font-heading col-start-2 w-fit p-2 text-right sm:col-start-3 sm:row-start-2 sm:text-left sm:text-2xl"
              ref={fpTrackingRef}
            >
              Device Fingerprinting
            </li>
          </ul>
        </div>
      </section>

      <section className="flex w-screen flex-col items-center py-8 sm:py-12">
        <div className="w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <span className="font-heading text-xl">IP Tracking</span> refers to the practice of
            monitoring and recording your online activities. {/* WebTrackingWikipedia */}
          </p>
          <p>Your IP-Address can be used to determine your aproximate geo location.</p>
          <p>Advertisers can use this to show you ads, that are relevant for your region.</p>
        </div>
      </section>

      <section className="bg-primary flex w-screen flex-col items-center border-y-4 border-dashed py-8 sm:py-12">
        <div className="w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <span className="font-heading text-xl">Tracking Pixels</span> refers to the practice of
            monitoring and recording your online activities. {/* WebTrackingWikipedia */}
          </p>
          <p>Small images, that are loaded invisible on a website or in an email.</p>
          <p>
            The origin server of the image can log, that you visited that website or looked at a
            specific email.
          </p>
        </div>
      </section>

      <section className="flex w-screen flex-col items-center py-8 sm:py-12">
        <div className="w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <span className="font-heading text-xl">Cookies</span> refers to the practice of
            monitoring and recording your online activities. {/* WebTrackingWikipedia */}
          </p>
          <p>Small data files stored in your browser.</p>
          <p>Third party cookies can be used to track you accross multiple websites.</p>
        </div>
      </section>

      <section className="bg-primary flex w-screen flex-col items-center border-y-4 border-dashed py-8 sm:py-12">
        <div className="w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <span className="font-heading text-xl">Device Fingerprinting</span> refers to the
            practice of monitoring and recording your online activities.{" "}
            {/* WebTrackingWikipedia */}
          </p>
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
          <Link to="/mitigation-strategies" className="link text-danger mt-4 block w-fit py-4">
            Show me how to protect →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Info;
