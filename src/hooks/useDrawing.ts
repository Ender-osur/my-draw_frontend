import { useState } from 'react';
import type { DrawingState } from '../types/game';

export function useDrawing() {
  const [drawing, setDrawing] = useState<DrawingState>({ points: [], isDrawing: false });

  const startDrawing = (x: number, y: number) => {
    setDrawing({
      points: [...drawing.points, { x, y }],
      isDrawing: true
    });
  };

  const addPoint = (x: number, y: number) => {
    if (!drawing.isDrawing) return;
    setDrawing({
      points: [...drawing.points, { x, y }],
      isDrawing: true
    });
  };

  const stopDrawing = () => {
    setDrawing(prev => ({ ...prev, isDrawing: false }));
  };

  const clearDrawing = () => {
    setDrawing({ points: [], isDrawing: false });
  };

  return {
    drawing,
    startDrawing,
    addPoint,
    stopDrawing,
    clearDrawing
  };
}