import React from 'react';
import { DrawingCanvas } from './drawing/DrawingCanvas';
import type { Level, DrawingState } from '../types/game';

interface GamePlayProps {
  level: Level;
  onDrawingComplete: (drawing: DrawingState) => void;
}

export function GamePlay({ level, onDrawingComplete }: GamePlayProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Reference Image</h2>
        <img 
          src={level.imageUrl}
          alt="Reference"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Your Drawing</h2>
        <DrawingCanvas
          width={400}
          height={300}
          timeLimit={level.timeLimit}
          onDrawingComplete={onDrawingComplete}
        />
      </div>
    </div>
  );
}