import { useState } from 'react';
import { Header } from './components/Header';
import { LevelGrid } from './components/LevelGrid';
import { GamePlay } from './components/GamePlay';
import { GameResult } from './components/GameResult';
import { INITIAL_LEVELS } from './utilities/constants/level';
import type { Level, DrawingState } from './types/game';

function App() {
  const [levels, setLevels] = useState<Level[]>(INITIAL_LEVELS);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [gameState, setGameState] = useState<'selection' | 'playing' | 'result'>('selection');
  const [score, setScore] = useState<number | null>(null);

  const handleLevelSelect = (level: Level) => {
    setSelectedLevel(level);
    setGameState('playing');
  };

  const handleDrawingComplete = (drawing: DrawingState) => {
    // Mock scoring system (to be replaced with backend ML scoring)
    const mockScore = Math.floor(Math.random() * 30) + 70;
    setScore(mockScore);
    setGameState('result');

    if (mockScore >= selectedLevel!.requiredScore) {
      // Unlock next level
      setLevels(prevLevels => 
        prevLevels.map(level => 
          level.id === selectedLevel!.id + 1 ? { ...level, isLocked: false } : level
        )
      );
    }
  };

  const resetGame = () => {
    setSelectedLevel(null);
    setGameState('selection');
    setScore(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {gameState === 'selection' && (
          <LevelGrid levels={levels} onSelect={handleLevelSelect} />
        )}

        {gameState === 'playing' && selectedLevel && (
          <GamePlay 
            level={selectedLevel}
            onDrawingComplete={handleDrawingComplete}
          />
        )}

        {gameState === 'result' && score !== null && selectedLevel && (
          <GameResult
            score={score}
            selectedLevel={selectedLevel}
            onReset={resetGame}
          />
        )}
      </main>
    </div>
  );
}

export default App;