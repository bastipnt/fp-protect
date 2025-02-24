import { useContext, useEffect, useState } from "react";
import { Link } from "wouter";
import Card from "../components/Card";
import ExtRefOverview from "../components/ExtRefOverview";
import PageSection from "../components/PageSection";
import SectionTitle from "../components/SectionTitle";
import { useDetectAdblock } from "../hooks/useDetectAdBlock";
import { useDetectCanvasBlock } from "../hooks/useDetectCanvasBlock";
import { DeviceContext } from "../providers/deviceProvider";
import recommendations from "../recommendations.json";

const browserList = [...recommendations.browsers.map(({ id }) => id), "DuckDuckGo"];
const browserRegex = new RegExp(browserList.join("|"), "i");

const Testing: React.FC = () => {
  const { adBlockDetected } = useDetectAdblock();
  const { browser } = useContext(DeviceContext);
  const { canvas2dBlocked, canvasWebGlBlocked, canvas2dRef, canvasWebGlRef } =
    useDetectCanvasBlock();
  const [scoreNum, setScoreNum] = useState<number>(0);

  const testBrowser = (browser?: string): boolean => browserRegex.test(browser || "");

  useEffect(() => {
    const requirements = [
      testBrowser(browser),
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

  return (
    <>
      <canvas className="pointer-events-none fixed -top-1000 -left-1000" ref={canvas2dRef}></canvas>
      <canvas
        className="pointer-events-none fixed -top-1000 -left-1000"
        ref={canvasWebGlRef}
      ></canvas>

      <PageSection>
        <h1>
          <SectionTitle>Browser Privacy Test</SectionTitle>
        </h1>
        <p>This test indicates how well your browser protects your data when navigating the web.</p>
        <div className="bg-surface-darker-half mt-8 flex flex-col rounded-2xl border-2 border-dashed px-4 py-8">
          <h2 className="text-center text-3xl">Your score:</h2>
          <p className="text-center text-4xl">{scoreNum}/4</p>
        </div>
      </PageSection>

      <PageSection bg>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li>
            <Card
              title="Browser"
              danger={!testBrowser(browser)}
              result={testBrowser(browser) ? `Yes (${browser})` : `No (${browser})`}
              bg
            >
              <p>Privacy focused browser:</p>
            </Card>
          </li>
          <li>
            <Card
              title="Ad Blocker"
              danger={!adBlockDetected}
              result={adBlockDetected ? "Yes" : "No"}
              bg
            >
              <p>Adblock detected:</p>
            </Card>
          </li>
          <li>
            <Card
              title="Canvas"
              danger={!canvas2dBlocked}
              result={canvas2dBlocked ? "Yes" : "No"}
              bg
            >
              <p>Canvas 2D faked or blocked:</p>
            </Card>
          </li>
          <li>
            <Card
              title="Canvas WebGl"
              danger={!canvasWebGlBlocked}
              result={canvasWebGlBlocked ? "Yes" : "No"}
              bg
            >
              <p>Canvas WebGl Blocked:</p>
            </Card>
          </li>
        </ul>
        <p className="text-stroke-light">
          This feature is experimental and does not always detect ad blocking or fingerprint
          protection, as these are difficult to detect.
        </p>
      </PageSection>

      <PageSection>
        <p>
          <SectionTitle>Happy</SectionTitle> with the results?
        </p>
        <p>
          There are many things that can be done to enhance your online privacy. If you are not
          satisfied with your test results, then maybe follow the tips on the{" "}
          <Link to="/mitigation-strategies" className="link">
            Protect Yourself
          </Link>{" "}
          page.
        </p>

        <p>
          If you want to learn even more, here are some recommendations for further reading and
          testing:
        </p>

        <ExtRefOverview />
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

        <a
          href="https://tracking-survey.bastipnt.de/?ref=test"
          target="_blank"
          className="font-heading bg-primary-lighter mt-4 rounded-2xl border-2 border-dashed p-4 text-center text-2xl sm:mt-8"
        >
          Take the Survey
        </a>
      </PageSection>
    </>
  );
};

export default Testing;
