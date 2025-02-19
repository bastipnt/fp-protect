import { useEffect, useRef } from "react";
import { resizeCanvas } from "../util/drawing";

const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef<(ctx: CanvasRenderingContext2D) => void>(() => {});

  useEffect(() => {
    const resize = () => {
      if (canvasRef.current === null) return;
      resizeCanvas(canvasRef.current);
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      drawRef.current(ctx);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return { canvasRef, drawRef };
};

export default useCanvas;
