export type Level = {
  id: number;
  name: string;
  imageUrl: string;
  timeLimit: number;
  requiredScore: number;
  isLocked: boolean;
}

export type DrawingState = {
  points: Array<{ x: number; y: number }>;
  isDrawing: boolean;
}