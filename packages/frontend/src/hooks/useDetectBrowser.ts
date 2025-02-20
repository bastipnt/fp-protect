import { useEffect, useState } from "react";

export enum Browsers {
  CHROME = "Chrome",
  FIREFOX = "Firefox",
  SAFARI = "Safari",
  OPERA = "OP",
}

export const useDetectBrowser = () => {
  const [browser, setBrowser] = useState<Browsers>();

  useEffect(() => {
    const userAgentString = navigator.userAgent;

    if (userAgentString.indexOf(Browsers.FIREFOX) > -1) setBrowser(Browsers.FIREFOX);
    else if (userAgentString.indexOf(Browsers.CHROME) > -1) setBrowser(Browsers.CHROME);

    if (userAgentString.indexOf(Browsers.SAFARI) > -1) setBrowser(Browsers.SAFARI);
    if (userAgentString.indexOf(Browsers.OPERA) > -1 && browser === Browsers.CHROME)
      setBrowser(Browsers.SAFARI);
  });

  return { browser };
};
