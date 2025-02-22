import { useRef } from "react";
import { Link } from "wouter";
import PageSection from "../components/PageSection";
import Reference from "../components/Reference";
import SectionTitle from "../components/SectionTitle";
import useCanvas from "../hooks/useCanvas";
import { useReferences } from "../hooks/useReferences";
import { drawDeviceIcon } from "../util/drawDeviceIconHelper";
import { getParentDimensions } from "../util/drawing";

export type TrackingMethodElements = {
  left: { el: HTMLLIElement | null }[];
  right: { el: HTMLLIElement | null };
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

    const trackingMethodElements: TrackingMethodElements = {
      left: [
        { el: ipTrackingRef.current },
        { el: pixelTrackingRef.current },
        { el: cookieTrackingRef.current },
      ],
      right: { el: fpTrackingRef.current },
    };

    await drawDeviceIcon(ctx, trackingMethodElements);
  };

  return (
    <>
      <PageSection references={getReferencesForBlock("1")}>
        <p>
          <SectionTitle>Web Tracking</SectionTitle> is the practice of monitoring and recording your
          online activities, allowing companies to gather insights about your behavior online
          <Reference referenceName="WebTrackingWikipedia" references={references.current} />.
        </p>
        <p>
          Major advertising firms, such as <strong>Google</strong> and <strong>Meta</strong>,
          generate billions in revenue by leveraging your data for{" "}
          <strong>targeted advertising</strong>
          <Reference referenceName="DigitalAdvertisingRevenue" references={references.current} />.
        </p>
        <p>
          Fortunately, there are effective measures you can take to safeguard your{" "}
          <strong>personal information</strong>.
        </p>
        <p>
          This website is designed to empower you with knowledge about <strong>web tracking</strong>{" "}
          and provide strategies to mitigate its impact.
        </p>
        <p>
          Additionally, you can take a <strong>self-assessment</strong> to evaluate how well your
          data is protected.
        </p>
        <p>
          This website is part of my <strong>master's thesis</strong>, aimed at exploring the
          implications of web tracking and enhancing user awareness.
        </p>
        <p>
          If you find this website helpful, please consider participating in this brief{" "}
          <a
            className="link"
            href="https://tracking-survey.bastipnt.de/?ref=test"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>survey</strong>
          </a>{" "}
          for my master's thesis. Thank you for your support! 💜
        </p>
      </PageSection>

      <section className="bg-primary flex w-full flex-col items-center gap-8 border-y-4 border-dashed py-8 sm:gap-12 sm:py-12">
        <div className="flex w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            There are several <SectionTitle>Tracking Methods</SectionTitle> employed by companies to
            monitor online behavior.
          </p>
          <p>
            Some of these methods you may already be familiar with, while others might be new to
            you.
          </p>
          <p>Here are the most common tracking methods:</p>
        </div>

        <div className="relative flex min-h-80 w-screen max-w-100 justify-items-stretch p-4 sm:max-w-250 sm:p-8">
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute top-0 left-0 h-full w-full"
          ></canvas>
          <ul className="grid w-full grid-cols-2 items-center justify-between justify-items-end gap-4 sm:grid-cols-3 sm:grid-rows-3 sm:justify-items-start">
            <li
              className="font-heading col-start-2 w-fit p-2 text-left sm:col-start-1 sm:row-start-1 sm:text-right sm:text-xl"
              ref={ipTrackingRef}
            >
              IP&nbsp;Tracking
            </li>
            <li
              className="font-heading col-start-2 w-fit p-2 text-left sm:col-start-1 sm:row-start-2 sm:text-right sm:text-xl"
              ref={pixelTrackingRef}
            >
              Tracking
              <br />
              Pixels
            </li>
            <li
              className="font-heading col-start-2 w-fit p-2 text-left sm:col-start-1 sm:row-start-3 sm:text-right sm:text-xl"
              ref={cookieTrackingRef}
            >
              Cookies
            </li>
            <li
              className="font-heading col-start-2 w-fit p-2 text-left sm:col-start-3 sm:row-start-2 sm:text-xl"
              ref={fpTrackingRef}
            >
              Device
              <br />
              Fingerprinting
            </li>
          </ul>
        </div>
      </section>

      <PageSection references={getReferencesForBlock("ip-tracking")}>
        <p>
          <SectionTitle>IP Tracking</SectionTitle> functions as follows:
        </p>
        <p>
          Each time you visit a webpage, your <strong>IP address</strong> is transmitted, allowing
          the website's server to know where to send the requested content
          <Reference referenceName="fisherWhatPublicIP2022" references={references.current} />.
        </p>
        <p>
          Your IP address can be utilized to determine your approximate <strong>geolocation</strong>
          .
        </p>
        <p>
          Advertisers leverage this information to display ads that are relevant to your specific
          region.
        </p>
        <p>
          Additionally, many <strong>streaming services</strong> use IP tracking for{" "}
          <strong>geo-blocking</strong>. This practice restricts access to content based on the
          user's geographical location. For example, certain shows or movies may only be available
          in specific countries due to licensing agreements.
        </p>
        <p>
          Using a <strong>VPN</strong> can help protect your IP address and enhance your online
          privacy. You can learn more about this{" "}
          <Link to="/mitigation-strategies#vpn" className="link">
            here
          </Link>
          .
        </p>
      </PageSection>

      <PageSection bg references={getReferencesForBlock("tracking-pixel")}>
        <p>
          <SectionTitle>Tracking Pixels</SectionTitle> are tiny images — often just a single pixel
          in size — that are embedded within a website
          <Reference referenceName="teamWhatAreTracking" references={references.current} />. These
          images are typically invisible to users.
        </p>
        <p>
          The primary purpose of a tracking pixel is to load an image from a remote server. When
          this image is requested, your browser sends a request to the server, allowing it to know
          that you have visited that specific webpage.
        </p>
        <p>
          Tracking pixels are particularly effective when included in emails. By embedding these
          pixels in emails, senders can determine whether you have opened and viewed the message.
        </p>
      </PageSection>

      <PageSection references={getReferencesForBlock("cookies")}>
        <p>
          <SectionTitle>Cookies</SectionTitle> are small data files that are stored in your browser
          when you visit a website
          <Reference
            referenceName={["kristolHTTPCookiesStandards2001", "HTTPCookie2025"]}
            references={references.current}
          />
          .
        </p>
        <p>
          Cookies are commonly used to remember your preferences and login details, allowing you to
          avoid re-entering your username and password each time you revisit a site.
        </p>
        <p>
          However, there are different types of cookies, including{" "}
          <strong>Third-Party Cookies</strong>.
        </p>
        <p>
          These cookies are primarily set by tracking companies and are used to monitor your
          activity across the web, collecting data about the websites you visit.
        </p>
        <p>
          Regularly clearing the cookies stored in your browser can help enhance your privacy and
          protect your personal information.
        </p>
      </PageSection>

      <PageSection bg references={getReferencesForBlock("fp")}>
        <p>
          <SectionTitle>Device Fingerprinting</SectionTitle> — also known as{" "}
          <strong>browser fingerprinting</strong> — is a technique that can identify you by
          combining various attributes from your browser and the device you are using
          <Reference referenceName="DeviceFingerprint2025" references={references.current} />.
        </p>
        <p>
          This method works because different browsers and hardware configurations return different
          values for these attributes.
        </p>
        <p>Some of the commonly used attributes include:</p>
        <ul className="ml-4 list-disc">
          <li>Your screen size</li>
          <li>Your timezone</li>
          <li>The browser you are using</li>
          <li>Your geolocation</li>
          <li>Hardware specifications (such as HTML Canvas and Web Audio)</li>
          <li>And many more...</li>
        </ul>
        <p>
          This tracking method is particularly effective because it is challenging to protect
          against. Unlike cookies, you cannot simply delete the data on your computer, as your
          computer itself serves as the data.
        </p>
        <p>
          Fortunately, there are steps you can take to safeguard your privacy. The next page will
          provide you with practical advice.
        </p>
      </PageSection>

      <Link
        to="/mitigation-strategies"
        className="font-heading bg-surface-darker-half m-4 my-8 rounded-2xl border-2 border-dashed p-4 text-center text-2xl"
      >
        How to protect myself
      </Link>
    </>
  );
};

export default Info;
