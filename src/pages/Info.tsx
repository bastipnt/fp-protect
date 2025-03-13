import { useRef } from "react";
import { Trans } from "react-i18next";
import { Link } from "wouter";
import PageSection from "../components/PageSection";
import Reference from "../components/Reference";
import SectionTitle from "../components/SectionTitle";
import useCanvas from "../hooks/useCanvas";
import { drawDeviceIcon } from "../util/drawDeviceIconHelper";
import { getParentDimensions } from "../util/drawHelper";

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
      <PageSection
        referenceIds={[
          "WebTrackingWikipedia",
          "sanchez-rolaWebWatchingYou2017",
          "simCombatingWebTracking2024",
          "dambraWhenSallyMet2022",
          "sarContextualIntegritysDecision2014",
          "twetmanDataBrokersSecurity2021",
          "DigitalAdvertisingRevenue",
        ]}
      >
        <p>
          <Trans i18nKey="info.web-tracking">
            <SectionTitle>Web Tracking</SectionTitle> is the practice of monitoring and recording
            your online activities, allowing companies to gather insights about your behavior online
          </Trans>
          <Reference referenceId="WebTrackingWikipedia" />.
        </p>
        <p>
          <Trans i18nKey="info.web-tracking-2">
            Originally designed to enhance user experiences and provide businesses with audience
            insights, web tracking has increasingly been misused, raising significant privacy
            concerns
            <Reference
              referenceId={["sanchez-rolaWebWatchingYou2017", "simCombatingWebTracking2024"]}
            />
            .
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.web-tracking-3">
            These tracking methods collect extensive user data, such as habits, interests, and
            locations <Reference referenceId="dambraWhenSallyMet2022" />, often without explicit
            consent
            <Reference
              referenceId={[
                "simCombatingWebTracking2024",
                "sarContextualIntegritysDecision2014",
                "sanchez-rolaWebWatchingYou2017",
              ]}
            />
            .
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.web-tracking-4">
            This data is frequently sold or shared with third-party advertisers and data brokers,
            enabling targeted advertising and surveillance
            <Reference referenceId={["dambraWhenSallyMet2022", "twetmanDataBrokersSecurity2021"]} />
            .
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.advertising-firms">
            Major advertising firms, such as <strong>Google</strong> and <strong>Meta</strong>,
            generate billions in revenue by leveraging your data for{" "}
            <strong>targeted advertising</strong>
          </Trans>
          <Reference referenceId="DigitalAdvertisingRevenue" />.
        </p>
        <p>
          <Trans i18nKey="info.affective-measures">
            Fortunately, there are effective measures you can take to safeguard your{" "}
            <strong>personal information</strong>.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.empower-knowledge">
            This website is designed to empower you with knowledge about{" "}
            <strong>web tracking</strong> and provide strategies to mitigate its impact.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.take-self-assessment">
            Additionally, you can take a <strong>self-assessment</strong> to evaluate how well your
            data is protected.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.masters-thesis">
            This website is part of my <strong>master's thesis</strong>, aimed at exploring the
            implications of web tracking and enhancing user awareness.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.take-survey">
            If you find this website helpful, please consider participating in this brief{" "}
            <a
              className="link"
              href="https://tracking-survey.bastipnt.de/?ref=test"
              target="_blank"
              rel="noopener noreferrer"
            >
              survey
            </a>{" "}
            for my master's thesis. Thank you for your support! 💜
          </Trans>
        </p>
      </PageSection>

      <section className="bg-primary flex w-full flex-col items-center gap-8 py-8 sm:gap-12 sm:py-12">
        <div className="flex w-150 max-w-screen flex-col gap-2 px-4 sm:px-8">
          <p>
            <Trans i18nKey="info.tracking-methods">
              There are several <SectionTitle>Tracking Methods</SectionTitle> employed by companies
              to monitor online behavior.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="info.familiar">
              Some of these methods you may already be familiar with, while others might be new to
              you.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="info.common-tracking-methods">
              The most common tracking methods are:
            </Trans>
          </p>
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

      <PageSection referenceIds={["fisherWhatPublicIP2022"]}>
        <p>
          <Trans i18nKey="info.ip-tracking">
            <SectionTitle>IP Tracking</SectionTitle> functions as follows:
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.ip-tracking-1">
            Each time you visit a webpage, your <strong>IP address</strong> is transmitted, allowing
            the website's server to know where to send the requested content
          </Trans>
          <Reference referenceId="fisherWhatPublicIP2022" />.
        </p>
        <p>
          <Trans i18nKey="info.ip-tracking-2">
            Your IP address can be utilized to determine your approximate{" "}
            <strong>geolocation</strong>.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.ip-tracking-3">
            Advertisers leverage this information to display ads that are relevant to your specific
            region.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.ip-tracking-4">
            Additionally, many <strong>streaming services</strong> use IP tracking for{" "}
            <strong>geo-blocking</strong>. This practice restricts access to content based on the
            user's geographical location. For example, certain shows or movies may only be available
            in specific countries due to licensing agreements.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.ip-tracking-5">
            Using a <strong>VPN</strong> can help protect your IP address and enhance your online
            privacy. You can learn more about this{" "}
            <Link to="/mitigation-strategies#vpn" className="link">
              here
            </Link>
            .
          </Trans>
        </p>
      </PageSection>

      <PageSection referenceIds={["teamWhatAreTracking"]} bg>
        <p>
          <Trans i18nKey="info.tracking-pixels">
            <SectionTitle>Tracking Pixels</SectionTitle> are tiny images — often just a single pixel
            in size — that are embedded within a website
            <Reference referenceId="teamWhatAreTracking" />. These images are typically invisible to
            users.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.tracking-pixels-1">
            The primary purpose of a tracking pixel is to load an image from a remote server. When
            this image is requested, your browser sends a request to the server, allowing it to know
            that you have visited that specific webpage.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.tracking-pixels-2">
            Tracking pixels are particularly effective when included in emails. By embedding these
            pixels in emails, senders can determine whether you have opened and viewed the message.
          </Trans>
        </p>
      </PageSection>

      <PageSection referenceIds={["kristolHTTPCookiesStandards2001", "HTTPCookie2025"]}>
        <p>
          <Trans i18nKey="info.cookies">
            <SectionTitle>Cookies</SectionTitle> are small data files that are stored in your
            browser when you visit a website
          </Trans>
          <Reference referenceId={["kristolHTTPCookiesStandards2001", "HTTPCookie2025"]} />.
        </p>
        <p>
          <Trans i18nKey="info.cookies-1">
            Cookies are commonly used to remember your preferences and login details, allowing you
            to avoid re-entering your username and password each time you revisit a site.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.cookies-2">However, there are different types of cookies.</Trans>
        </p>
        <p>
          <Trans i18nKey="info.cookies-3">
            <strong>Third-Party Cookies</strong> are primarily set by tracking companies and are
            used to monitor your activity across the web, collecting data about the websites you
            visit.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.cookies-4">
            Regularly clearing the cookies stored in your browser can help enhance your privacy and
            protect your personal information.
          </Trans>
        </p>
      </PageSection>

      <PageSection referenceIds={["DeviceFingerprint2025"]} bg>
        <p>
          <Trans i18nKey="info.device-fp">
            <SectionTitle>Device Fingerprinting</SectionTitle> — also known as{" "}
            <strong>browser fingerprinting</strong> — is a technique that can identify you by
            combining various attributes from your browser and the device you are using
          </Trans>
          <Reference referenceId="DeviceFingerprint2025" />.
        </p>
        <p>
          <Trans i18nKey="info.device-fp-1">
            This method works because different browsers and hardware configurations return
            different values for these attributes.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.device-fp-2">Some of the commonly used attributes include:</Trans>
        </p>
        <Trans i18nKey="info.device-fp-ul">
          <ul className="ml-4 list-disc">
            <li>Your screen size</li>
            <li>Your timezone</li>
            <li>The browser you are using</li>
            <li>Your geolocation</li>
            <li>Hardware specifications (such as HTML Canvas and Web Audio)</li>
            <li>And many more...</li>
          </ul>
        </Trans>
        <p>
          <Trans i18nKey="info.device-fp-3">
            This tracking method is particularly effective because it is challenging to protect
            against. Unlike cookies, you cannot simply delete the data on your computer, as your
            computer itself serves as the data.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="info.device-fp-4">
            Fortunately, there are steps you can take to safeguard your privacy. The next page will
            provide you with practical advice.
          </Trans>
        </p>
      </PageSection>

      <Link
        to="/mitigation-strategies"
        className="font-heading bg-surface-darker-half m-4 my-8 rounded-2xl border-2 border-dashed p-4 text-center text-2xl"
      >
        <Trans i18nKey="info.protect-link">How to protect myself</Trans>
      </Link>
    </>
  );
};

export default Info;
