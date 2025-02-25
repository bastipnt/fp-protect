import { useEffect, useState } from "react";

/**
 * Detect if user is using an adblock extension
 * @see https://www.detectadblock.com/
 * @see https://stackoverflow.com/questions/4869154/how-to-detect-adblock-on-my-website
 * @see https://html-online.com/articles/how-to-detect-adblockers-with-javascript/
 * @see https://tms-outsource.com/blog/posts/how-do-websites-detect-adblock/
 * @see https://www.geeksforgeeks.org/how-to-detect-ad-blocker-using-mutation-observer-api/
 */
export const useDetectAdblock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    if (!("prebidAdsLoaded" in window) || window.prebidAdsLoaded !== true) setAdBlockDetected(true);
    if (!("adsPrebidLoaded" in window) || window.adsPrebidLoaded !== true) setAdBlockDetected(true);
    if (!("adsLoaded" in window) || window.adsLoaded !== true) setAdBlockDetected(true);
  });

  return { adBlockDetected };
};
