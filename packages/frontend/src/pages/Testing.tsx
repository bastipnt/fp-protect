import { useDetectAdblock } from "../hooks/useDetectAdBlock";
import { useDetectBrowser } from "../hooks/useDetectBrowser";

const Testing: React.FC = () => {
  const { adBlockDetected } = useDetectAdblock();
  const { browser } = useDetectBrowser();

  return (
    <>
      <p>Adblock detected? {adBlockDetected ? "True" : "False"}</p>
      <p>Browser: {browser}</p>
    </>
  );
};

export default Testing;
