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

    const matches = Object.values(Browsers).reduce<{ [key in Browsers]: boolean }>(
      (prevMatches, currBrowser) => {
        return { ...prevMatches, [currBrowser]: userAgentString.indexOf(currBrowser) > -1 };
      },
      {} as { [key in Browsers]: boolean },
    );

    if (matches.Firefox) setBrowser(Browsers.FIREFOX);
    else if (matches.Chrome && !matches.OP) setBrowser(Browsers.CHROME);
    else if (matches.Safari && !matches.Chrome) setBrowser(Browsers.SAFARI);
    else if (matches.OP) setBrowser(Browsers.OPERA);
  });

  return { browser };
};
