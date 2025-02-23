interface Navigator {
  brave?: { isBrave?: () => boolean };
}

interface Chrome {
  tabs?: {
    query?: (options: {
      active: boolean;
      currentWindow: boolean;
    }) => Promise<{ [key: "vivExtData" | string]: any }[]>;
  };
}

interface Window {
  chrome: Chrome | undefined;
}
