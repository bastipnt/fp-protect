const HEADER_OFFSET = 80;

export const wait = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const scrollTopOrHash = async (hash?: string) => {
  window.scrollTo(0, 0);

  await wait(100);

  if (!hash || hash.length === 0) return;

  const el = document.getElementById(hash);
  if (!el) return;
  const elementOffset = el.getBoundingClientRect().top;
  const scrollPosition = elementOffset + window.scrollY - HEADER_OFFSET;

  window.scrollTo({ top: scrollPosition, behavior: "smooth" });
};
