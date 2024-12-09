import type { Level } from '../../types/game';

export const INITIAL_LEVELS: Level[] = [
  {
    id: 1,
    name: 'Simple Circle',
    imageUrl: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=400&h=300&fit=crop',
    timeLimit: 30,
    requiredScore: 70,
    isLocked: false
  },
  {
    id: 2,
    name: 'Basic House',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    timeLimit: 45,
    requiredScore: 75,
    isLocked: true
  },
  {
    id: 3,
    name: 'Tree',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop',
    timeLimit: 60,
    requiredScore: 80,
    isLocked: true
  }
];