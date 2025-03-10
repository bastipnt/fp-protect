import { useEffect, useRef, useState } from "react";

const renderingContexts = [
  "webgl2",
  "experimental-webgl2",
  "webgl",
  "experimental-webgl",
  "moz-webgl",
  "webkit-3d",
  "webgl2-compute",
];

export const useDetectCanvasBlock = () => {
  const canvas2dRef = useRef<HTMLCanvasElement>(null);
  const canvasWebGlRef = useRef<HTMLCanvasElement>(null);

  const [canvas2dBlocked, setCanvas2dBlocked] = useState(false);
  const [canvasWebGlBlocked, setCanvasWebGlBlocked] = useState(false);

  const checkCanvas2dBlocked = async (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setCanvas2dBlocked(true);
      return;
    }

    const size = 4;
    canvas.width = size;
    canvas.height = size;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, size, size);
    const imgData = ctx.getImageData(0, 0, size, size);
    const notWhite = imgData.data.find((val) => val !== 255);
    if (notWhite !== undefined) setCanvas2dBlocked(true);
  };

  const checkCanvasWebGlBlocked = (canvas: HTMLCanvasElement) => {
    let ctx: RenderingContext | null = null;

    renderingContexts.forEach((contextStr) => {
      if (ctx === null) ctx = canvas.getContext(contextStr);
    });

    if (ctx === null) setCanvasWebGlBlocked(true);
  };

  useEffect(() => {
    if (canvas2dRef.current === null) return;
    if (canvasWebGlRef.current === null) return;

    checkCanvas2dBlocked(canvas2dRef.current);
    checkCanvasWebGlBlocked(canvasWebGlRef.current);
  }, []);

  return { canvas2dBlocked, canvasWebGlBlocked, canvas2dRef, canvasWebGlRef };
};
