import { useContext, useEffect, useState } from "react";
import { Trans } from "react-i18next";
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
          <SectionTitle>
            <Trans i18nKey="test.title">Browser Privacy Test</Trans>
          </SectionTitle>
        </h1>
        <p>
          <Trans i18nKey="test.intro">
            This test indicates how well your browser protects your data when navigating the web.
          </Trans>
        </p>
        <div className="bg-surface-darker-half mt-8 flex flex-col rounded-2xl border-2 border-dashed px-4 py-8">
          <h2 className="text-center text-3xl">
            <Trans i18nKey="test.score">Your score:</Trans>
          </h2>
          <p className="text-center text-4xl">{scoreNum}/4</p>
        </div>
      </PageSection>

      <PageSection bg>
        <ul className="grid items-stretch gap-4 sm:grid-cols-2">
          <li>
            <Card
              title="Browser"
              danger={!testBrowser(browser)}
              className="h-full"
              result={
                testBrowser(browser) ? (
                  <Trans i18nKey="yes.browser" browser={browser}>
                    Yes ({{ browser }})
                  </Trans>
                ) : (
                  <Trans i18nKey="no.browser" browser={browser}>
                    No ({{ browser }})
                  </Trans>
                )
              }
              bg
            >
              <p>
                <Trans i18nKey="test.browser">Privacy focused browser:</Trans>
              </p>
            </Card>
          </li>
          <li>
            <Card
              title="Ad Blocker"
              danger={!adBlockDetected}
              className="h-full"
              result={
                adBlockDetected ? (
                  <Trans i18nKey="yes.simple">Yes</Trans>
                ) : (
                  <Trans i18nKey="no.simple">No</Trans>
                )
              }
              bg
            >
              <p>
                <Trans i18nKey="test.ad-block">Adblock detected:</Trans>
              </p>
            </Card>
          </li>
          <li className="sm:col-span-2">
            <Card
              title="Fingerprint Protection"
              danger={!canvas2dBlocked}
              className="h-full"
              result={
                canvas2dBlocked ? (
                  <Trans i18nKey="yes.simple">Yes</Trans>
                ) : (
                  <Trans i18nKey="no.simple">No</Trans>
                )
              }
              bg
            >
              <p>
                <Trans i18nKey="test.canvas">Fingerprint faked:</Trans>
              </p>
            </Card>
          </li>
          {/* <li>
            <Card
              title="Canvas WebGl"
              danger={!canvasWebGlBlocked}
              className="h-full"
              result={
                canvasWebGlBlocked ? (
                  <Trans i18nKey="yes.simple">Yes</Trans>
                ) : (
                  <Trans i18nKey="no.simple">No</Trans>
                )
              }
              bg
            >
              <p>
                <Trans i18nKey="test.webgl">Canvas WebGl Blocked:</Trans>
              </p>
            </Card>
          </li> */}
        </ul>
        <p className="text-stroke-light">
          <Trans i18nKey="test.experimental-info">
            This feature is experimental and does not always detect ad blocking or fingerprint
            protection, as these are difficult to detect.
          </Trans>
        </p>
      </PageSection>

      <PageSection>
        <p>
          <Trans i18nKey="test.conclusion">
            <SectionTitle>Happy</SectionTitle> with the results?
          </Trans>
        </p>
        <p>
          <Trans i18nKey="test.conclusion-1">
            There are many things that can be done to enhance your online privacy. If you are not
            satisfied with your test results, then maybe follow the tips on the{" "}
            <Link to="/mitigation-strategies" className="link">
              Protect Yourself
            </Link>{" "}
            page.
          </Trans>
        </p>

        <p>
          <Trans i18nKey="test.conclusion-2">
            If you want to learn even more, here are some recommendations for further reading and
            testing:
          </Trans>
        </p>

        <ExtRefOverview />
      </PageSection>

      <PageSection bg>
        <p>
          <SectionTitle>
            <Trans i18nKey="test.survey">Survey</Trans>
          </SectionTitle>
        </p>
        <p>
          <Trans i18nKey="test.survey-1">
            Thanks for taking your time and looking at this webpage!
          </Trans>
        </p>
        <p>
          <Trans i18nKey="test.survey-2">It originated as a project from my masters thesis.</Trans>
        </p>
        <p>
          <Trans i18nKey="test.survey-3">
            If you liked it (or not), it would help me to take my survey on targeted ads and web
            tracking.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="test.survey-4">
            It is very short and will take you only ~2mins. Thanks! 💜✨
          </Trans>
        </p>

        <a
          href="https://tracking-survey.bastipnt.de/?ref=test"
          target="_blank"
          className="font-heading bg-primary-lighter mt-4 rounded-2xl border-2 border-dashed p-4 text-center text-2xl sm:mt-8"
        >
          <Trans i18nKey="test.survey-link">Take the Survey</Trans>
        </a>
      </PageSection>
    </>
  );
};

export default Testing;
