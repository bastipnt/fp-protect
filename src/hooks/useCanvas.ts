import { useEffect, useRef } from "react";
import { resizeCanvas } from "../util/drawing";

const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef<(ctx: CanvasRenderingContext2D) => void>(() => {});
  const widthRef = useRef<number>(0);

  const resize = () => {
    if (canvasRef.current === null) return;
    if (widthRef.current === window.innerWidth) return;

    widthRef.current = window.innerWidth;

    resizeCanvas(canvasRef.current);
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    drawRef.current(ctx);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return { canvasRef, drawRef };
};

export default useCanvas;
