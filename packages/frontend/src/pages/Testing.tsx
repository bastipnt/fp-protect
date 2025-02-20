import { ReactNode, useEffect, useState } from "react";
import { Link } from "wouter";
import Card from "../components/Card";
import TestCard from "../components/TestCard";
import { useDetectAdblock } from "../hooks/useDetectAdBlock";
import { Browsers, useDetectBrowser } from "../hooks/useDetectBrowser";
import { useDetectCanvasBlock } from "../hooks/useDetectCanvasBlock";

enum ProtectionState {
  GOOD = "good",
  OK = "ok",
  BAD = "bad",
}

const Testing: React.FC = () => {
  const { adBlockDetected } = useDetectAdblock();
  const { browser } = useDetectBrowser();
  const { canvas2dBlocked, canvasWebGlBlocked, canvas2dRef, canvasWebGlRef } =
    useDetectCanvasBlock();

  const [protectionState, setProtectionState] = useState<ProtectionState>(ProtectionState.BAD);

  useEffect(() => {
    const requirements = [
      browser === Browsers.FIREFOX,
      adBlockDetected,
      canvas2dBlocked,
      canvasWebGlBlocked,
    ];

    const numFullfilled = requirements.reduce((num, requirementVal) => {
      return num + (requirementVal ? 1 : 0);
    }, 0);

    if (numFullfilled === 4) setProtectionState(ProtectionState.GOOD);
    else if (numFullfilled === 3) setProtectionState(ProtectionState.OK);
    else setProtectionState(ProtectionState.BAD);
  }, [browser, adBlockDetected, canvas2dBlocked, canvasWebGlBlocked]);

  const getTimeZone = (): string => {
    const DateTimeFormat = window.Intl?.DateTimeFormat;
    let timezone = "Unknown";
    if (DateTimeFormat) timezone = new DateTimeFormat().resolvedOptions().timeZone || "Unknown";

    return timezone;
  };

  const getTitle = (state: ProtectionState): string => {
    switch (state) {
      case ProtectionState.GOOD:
        return "Congrats!";
      case ProtectionState.OK:
        return "Almost there!";

      default:
        return "Your protection is not good :(";
    }
  };

  const getContent = (state: ProtectionState): ReactNode => {
    switch (state) {
      case ProtectionState.GOOD:
        return <p>You are very good protected.</p>;
      case ProtectionState.OK:
        return <p>Your protection is ok, but could be better.</p>;

      default:
        return (
          <>
            <p>Learn, how you can protect yourself better:</p>
            <Link
              to="/mitigation-strategies"
              className="bg-surface-darker text-bold font-heading cursor-pointer self-end border-4 px-2 text-lg"
            >
              Show me how to protect
            </Link>
          </>
        );
    }
  };

  return (
    <>
      <canvas className="fixed -top-1000 -left-1000" ref={canvas2dRef}></canvas>
      <canvas className="fixed -top-1000 -left-1000" ref={canvasWebGlRef}></canvas>
      <section className="grid grid-cols-2 gap-8">
        <Card title={getTitle(protectionState)} className="col-span-2">
          {getContent(protectionState)}
        </Card>

        <TestCard
          title="Browser"
          danger={browser !== Browsers.FIREFOX}
          result={browser === Browsers.FIREFOX ? `Yes: ${browser}` : `No: ${browser}`}
        >
          <p>Privacy focused browser:</p>
        </TestCard>
        <TestCard title="Timezone" result={getTimeZone()}>
          <p>Your current timezone:</p>
        </TestCard>
        <TestCard
          title="Ad Blocker"
          danger={!adBlockDetected}
          result={adBlockDetected ? "Yes" : "No"}
        >
          <p>Adblock detected:</p>
        </TestCard>
        <TestCard
          title="Canvas 2D"
          danger={!canvas2dBlocked}
          result={canvas2dBlocked ? "Yes" : "No"}
        >
          <p>Canvas 2D faked or blocked:</p>
        </TestCard>
        <TestCard
          title="Canvas WebGl"
          danger={!canvasWebGlBlocked}
          result={canvasWebGlBlocked ? "Yes" : "No"}
        >
          <p>Canvas WebGl Blocked:</p>
        </TestCard>

        <Card title="Survey">
          <p>How did you like this test?</p>
          <p>Did you learn anything new?</p>
          <p>I prepared a very short survey, it would mean a lot if you could make it :)</p>
          <Link
            to="/survey"
            className="bg-surface-darker text-bold font-heading cursor-pointer self-end border-4 px-2 text-lg"
          >
            Take the survey
          </Link>
        </Card>
      </section>
    </>
  );
};

export default Testing;
