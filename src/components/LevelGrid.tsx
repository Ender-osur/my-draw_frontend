import { LevelCard } from './LevelCard';
import type { Level } from '../types/game';

interface LevelGridProps {
  levels: Level[];
  onSelect: (level: Level) => void;
}

export function LevelGrid({ levels, onSelect }: LevelGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {levels.map(level => (
        <LevelCard 
          key={level.id}
          level={level}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}