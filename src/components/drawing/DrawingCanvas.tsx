import React, { useRef, useEffect, useState } from 'react';
import { useDrawing } from '../../hooks/useDrawing';
import { useTimer } from '../../hooks/useTimer';
import type { DrawingState } from '../../types/game';

interface DrawingCanvasProps {
  width: number;
  height: number;
  onDrawingComplete: (drawing: DrawingState) => void;
  timeLimit: number;
}

export function DrawingCanvas({ width, height, onDrawingComplete, timeLimit }: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { drawing, startDrawing: startDraw, addPoint, stopDrawing, clearDrawing } = useDrawing();
  const [hasDrawn, setHasDrawn] = useState(false);
  const timeLeft = useTimer(timeLimit, () => onDrawingComplete(drawing));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    drawing.points.forEach((point, index) => {
      if (index === 0) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }
    });
  }, [drawing, width, height]);

  const handlePointerStart = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    
    setHasDrawn(true);
    startDraw(x, y);
  };

  const handlePointerMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    addPoint(x, y);
  };

  const handleClear = () => {
    clearDrawing();
    setHasDrawn(false);
  };

  return (
    <div className="relative">
      <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full shadow-md">
        {timeLeft}s
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border-2 border-gray-300 rounded-lg touch-none"
        onMouseDown={handlePointerStart}
        onMouseMove={handlePointerMove}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={handlePointerStart}
        onTouchMove={handlePointerMove}
        onTouchEnd={stopDrawing}
      />
      <div className="mt-4 flex gap-4 justify-center">
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Clear
        </button>
        <button
          onClick={() => onDrawingComplete(drawing)}
          disabled={!hasDrawn}
          className={`px-4 py-2 rounded-lg transition-colors ${
            hasDrawn
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
}