import { Lock } from 'lucide-react';
import type { Level } from '../types/game';

interface LevelCardProps {
  level: Level;
  onSelect: (level: Level) => void;
}

export function LevelCard({ level, onSelect }: LevelCardProps) {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105 ${
        level.isLocked ? 'opacity-75' : ''
      }`}
      onClick={() => !level.isLocked && onSelect(level)}
    >
      <img 
        src={level.imageUrl} 
        alt={`Level ${level.id}`}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        {level.isLocked ? (
          <Lock className="w-12 h-12 text-white" />
        ) : (
          <div className="text-white text-center">
            <h3 className="text-xl font-bold">{level.name}</h3>
            <p className="text-sm">Time: {level.timeLimit}s</p>
          </div>
        )}
      </div>
    </div>
  );
}