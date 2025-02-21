import { useRef } from "react";
import { Link } from "wouter";
import Reference from "../components/Reference";
import ReferenceList from "../components/ReferenceList";
import useCanvas from "../hooks/useCanvas";
import { useReferences } from "../hooks/useReferences";
import { drawComputer, drawComputerLines } from "../util/drawComputer";
import { getParentDimensions } from "../util/drawing";
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
    { index: 1, name: "WebTrackingWikipedia", block: "1" },
    { index: 2, name: "DigitalAdvertisingRevenue", block: "1" },
    { index: 3, name: "fisherWhatPublicIP2022", block: "ip-tracking" },
    { index: 4, name: "teamWhatAreTracking", block: "tracking-pixel" },
    { index: 5, name: "kristolHTTPCookiesStandards2001", block: "cookies" },
    { index: 6, name: "HTTPCookie2025", block: "cookies" },
    { index: 7, name: "DeviceFingerprint2025", block: "fp" },
  ];

  drawRef.current = async (ctx: CanvasRenderingContext2D) => {
    const { width, height } = getParentDimensions(ctx.canvas);
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
        <p>Luckily there are things you can do to protect your data.</p>
        <p>This website aims to help you learn more about web tracking and how to mitigate it.</p>
        <p>There is also a self test, to see how well you are protected.</p>
        <p>
          If you like this website, please consider taking part in this short{" "}
          <a className="link" href="https://tracking-survey.bastipnt.de/?ref=test" target="_blank">
            survey
          </a>{" "}
          for my masters thesis. Thank you! 💜
        </p>
        <ReferenceList references={getReferencesForBlock("1")} />
      </section>

      <section className="bg-primary flex w-full flex-col items-center gap-8 border-y-4 border-dashed py-8 sm:gap-12 sm:py-12">
        <div className="flex w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            There are multiple different{" "}
            <span className="font-heading text-xl">Tracking Methods</span>.
          </p>
          <p>Some you may already have heard of, some are maybe new to you.</p>
          <p>The most common ones are:</p>
        </div>

        <div className="relative flex min-h-80 w-screen max-w-250 justify-items-stretch p-4 sm:p-8">
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
            <span className="font-heading text-xl">IP Tracking</span> works as follows:
          </p>
          <p>
            Every time you visit a webpage you are sending your IP Address, so the website's server
            knows where to send the webpage to
            <Reference referenceName="fisherWhatPublicIP2022" references={references.current} />.
          </p>
          <p>Your IP-Address can be used to determine your approximate geo location.</p>
          <p>Advertisers can use this to show you ads, that are relevant for your region.</p>
          <p>
            <code>VPNs</code> can help you to protect your IP Address. More on that{" "}
            <Link to="/mitigation-strategies#vpn" className="link">
              here
            </Link>
            .
          </p>
          <ReferenceList references={getReferencesForBlock("ip-tracking")} />
        </div>
      </section>

      <section className="bg-primary flex w-screen flex-col items-center border-y-4 border-dashed py-8 sm:py-12">
        <div className="w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <span className="font-heading text-xl">Tracking Pixels</span> are small images — often
            only one pixel in size — that are embedded on a website
            <Reference referenceName="teamWhatAreTracking" references={references.current} />. These
            images are normally invisible to you.
          </p>
          <p>
            The whole purpose of it is, that the image is loaded from a remote server. For loading
            your browser needs to make a request to this server. So the server knows, that you
            visited, that specific web page.
          </p>
          <p>
            This is particularly effective when included in emails. By including tracking pixels in
            emails, senders can see that you looked at the email.
          </p>
          <ReferenceList references={getReferencesForBlock("tracking-pixel")} />
        </div>
      </section>

      <section className="flex w-screen flex-col items-center py-8 sm:py-12">
        <div className="w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <span className="font-heading text-xl">Cookies</span> are small data files stored on
            your browser when you visit a website
            <Reference
              referenceName={["kristolHTTPCookiesStandards2001", "HTTPCookie2025"]}
              references={references.current}
            />
            .
          </p>
          <p>
            These are often used to remember your preferences or login details, allowing to avoid
            re-entering your username and password each time you revisit a site.
          </p>
          <p>
            But there are also different cookies: <code>Third Party Cookies</code>
          </p>
          <p>
            These cookies originate mostly from tracking companies and are used to follow you around
            the web, and collect data about the websites you visited.
          </p>
          <p>Regularly clearing the cookies stored in your browser can help to protect yourself.</p>
          <ReferenceList references={getReferencesForBlock("cookies")} />
        </div>
      </section>

      <section className="bg-primary flex w-screen flex-col items-center border-y-4 border-dashed py-8 sm:py-12">
        <div className="w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <span className="font-heading text-xl">Device Fingerprinting</span> — also called
            browser fingerprinting — can identify you by combining different attributes from your
            browser and the device you are using
            <Reference referenceName="DeviceFingerprint2025" references={references.current} />.
          </p>
          <p>
            This works, because different browsers and hardware return different values for these
            attributes.
          </p>
          <p>Some of the attributes commonly used are:</p>
          <ul className="ml-4 list-disc">
            <li>Your screen size</li>
            <li>Your timezone</li>
            <li>The browser you are using</li>
            <li>Your geo location</li>
            <li>Hardware specifications (HTML Canvas and Web Audio)</li>
            <li>And many more...</li>
          </ul>
          <p>
            This tracking method is very effective, because it is not easy to protect from. Unlike
            with cookies you can not simply delete the data on your computer, because your computer
            itself is the data.
          </p>
          <p>
            Luckily there are some things you can do to protect your privacy. The next page will
            give you some practical advise:{" "}
            <Link to="/mitigation-strategies" className="link text-danger">
              How to mitigate web tracking
            </Link>
            .
          </p>
          <ReferenceList references={getReferencesForBlock("fp")} />
        </div>
      </section>
    </>
  );
};

export default Info;
