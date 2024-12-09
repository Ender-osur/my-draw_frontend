import type { Level } from '../types/game';

interface GameResultProps {
  score: number;
  selectedLevel: Level;
  onReset: () => void;
}

export function GameResult({ score, selectedLevel, onReset }: GameResultProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Your Score: {score}%</h2>
      <p className="text-xl mb-6">
        {score >= selectedLevel.requiredScore
          ? 'Congratulations! You have unlocked the next level!'
          : 'Keep practicing! Try again to unlock the next level.'}
      </p>
      <button
        onClick={onReset}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Back to Levels
      </button>
    </div>
  );
}
