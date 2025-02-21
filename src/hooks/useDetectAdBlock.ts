import { useEffect, useState } from "react";

export const useDetectAdblock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    if (!("prebidAdsLoaded" in window) || window.prebidAdsLoaded !== true) setAdBlockDetected(true);
    if (!("adsPrebidLoaded" in window) || window.adsPrebidLoaded !== true) setAdBlockDetected(true);
    if (!("adsLoaded" in window) || window.adsLoaded !== true) setAdBlockDetected(true);
  });

  return { adBlockDetected };
};
