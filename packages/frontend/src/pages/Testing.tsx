import { useDetectAdblock } from "../hooks/useDetectAdBlock";
import { useDetectBrowser } from "../hooks/useDetectBrowser";
import { useDetectCanvasBlock } from "../hooks/useDetectCanvasBlock";

const Testing: React.FC = () => {
  const { adBlockDetected } = useDetectAdblock();
  const { browser } = useDetectBrowser();
  const { canvas2dBlocked, canvasWebGlBlocked, canvas2dRef, canvasWebGlRef } =
    useDetectCanvasBlock();

  return (
    <>
      <canvas className="fixed -top-1000 -left-1000" ref={canvas2dRef}></canvas>
      <canvas className="fixed -top-1000 -left-1000" ref={canvasWebGlRef}></canvas>

      <p>Adblock detected? {adBlockDetected ? "True" : "False"}</p>
      <p>Browser: {browser}</p>
      <p>Canvas 2D: {canvas2dBlocked ? "Blocked" : "Not Blocked"}</p>
      <p>Canvas WebGl: {canvasWebGlBlocked ? "Blocked" : "Not Blocked"}</p>
    </>
  );
};

export default Testing;
