import { useContext, useEffect, useState } from "react";
import { Link } from "wouter";
import Card from "../components/Card";
import PageSection from "../components/PageSection";
import SectionTitle from "../components/SectionTitle";
import { useDetectAdblock } from "../hooks/useDetectAdBlock";
import { useDetectCanvasBlock } from "../hooks/useDetectCanvasBlock";
import { ResponsivenessContext } from "../providers/responsivenessProvider";

const PREFERRED_BROWSER = /[Ff]irefox/;

const Testing: React.FC = () => {
  const { adBlockDetected } = useDetectAdblock();
  const { browser } = useContext(ResponsivenessContext);
  const { canvas2dBlocked, canvasWebGlBlocked, canvas2dRef, canvasWebGlRef } =
    useDetectCanvasBlock();
  const [scoreNum, setScoreNum] = useState<number>(0);

  const testBrowser = (browser?: string): boolean => PREFERRED_BROWSER.test(browser || "");

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
