import { useEffect, useState } from "react";
import { Link } from "wouter";
import PageSection from "../components/PageSection";
import SectionTitle from "../components/SectionTitle";
import TestCard from "../components/TestCard";
import { useDetectAdblock } from "../hooks/useDetectAdBlock";
import { Browsers, useDetectBrowser } from "../hooks/useDetectBrowser";
import { useDetectCanvasBlock } from "../hooks/useDetectCanvasBlock";

const Testing: React.FC = () => {
  const { adBlockDetected } = useDetectAdblock();
  const { browser } = useDetectBrowser();
  const { canvas2dBlocked, canvasWebGlBlocked, canvas2dRef, canvasWebGlRef } =
    useDetectCanvasBlock();
  const [scoreNum, setScoreNum] = useState<number>(0);

  useEffect(() => {
    const requirements = [
      browser === Browsers.FIREFOX,
      adBlockDetected,
      canvas2dBlocked,
      canvasWebGlBlocked,
    ];

    setScoreNum(
      requirements.reduce((num, requirementVal) => {
        return num + (requirementVal ? 1 : 0);
      }, 0),
    );
  }, [browser, adBlockDetected, canvas2dBlocked, canvasWebGlBlocked]);

  // const getTimeZone = (): string => {
  //   const DateTimeFormat = window.Intl?.DateTimeFormat;
  //   let timezone = "Unknown";
  //   if (DateTimeFormat) timezone = new DateTimeFormat().resolvedOptions().timeZone || "Unknown";

  //   return timezone;
  // };

  return (
    <>
      <canvas className="pointer-events-none fixed -top-1000 -left-1000" ref={canvas2dRef}></canvas>
      <canvas
        className="pointer-events-none fixed -top-1000 -left-1000"
        ref={canvasWebGlRef}
      ></canvas>

      <PageSection>
        <p>
          This <SectionTitle>Browser Privacy Evaluation</SectionTitle> tests, how well your browser
          protects your data when navigating the web.
        </p>
        <div className="bg-surface-darker-half mt-8 flex flex-col rounded-2xl border-2 border-dashed px-4 py-8">
          <h2 className="text-center text-3xl">Your score:</h2>
          <p className="text-center text-4xl">{scoreNum}/4</p>
        </div>
      </PageSection>

      <PageSection bg>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li>
            <TestCard
              title="Browser"
              danger={browser !== Browsers.FIREFOX}
              result={browser === Browsers.FIREFOX ? `Yes (${browser})` : `No (${browser})`}
            >
              <p>Privacy focused browser:</p>
            </TestCard>
          </li>
          {/* <li>
            <TestCard title="Timezone" result={getTimeZone()}>
              <p>Your current timezone:</p>
            </TestCard>
          </li> */}
          <li>
            <TestCard
              title="Ad Blocker"
              danger={!adBlockDetected}
              result={adBlockDetected ? "Yes" : "No"}
            >
              <p>Adblock detected:</p>
            </TestCard>
          </li>
          <li>
            <TestCard
              title="Canvas"
              danger={!canvas2dBlocked}
              result={canvas2dBlocked ? "Yes" : "No"}
            >
              <p>Canvas 2D faked or blocked:</p>
            </TestCard>
          </li>
          <li>
            <TestCard
              title="Canvas WebGl"
              danger={!canvasWebGlBlocked}
              result={canvasWebGlBlocked ? "Yes" : "No"}
            >
              <p>Canvas WebGl Blocked:</p>
            </TestCard>
          </li>
        </ul>
      </PageSection>

      <PageSection>
        <p>
          <SectionTitle>Happy</SectionTitle> with the results?
        </p>
        <p>
          If not then maybe follow the tips on{" "}
          <Link to="/mitigation-strategies" className="link">
            this
          </Link>{" "}
          page.
        </p>
      </PageSection>

      <PageSection bg>
        <p>
          <SectionTitle>Survey</SectionTitle>
        </p>
        <p>Thanks for taking your time and looking at this webpage!</p>
        <p>It originated as a project from my masters thesis.</p>
        <p>
          If you liked it (or not), it would help me to take my survey on targeted ads and web
          tracking.
        </p>
        <p>It is very short and will take you only ~2mins. Thanks! 💜✨</p>
      </PageSection>

      <a
        href="https://tracking-survey.bastipnt.de/?ref=test"
        target="_blank"
        className="font-heading bg-surface-darker-half m-4 my-8 rounded-2xl border-2 border-dashed p-4 text-center text-2xl"
      >
        Take the Survey
      </a>
    </>
  );
};

export default Testing;
