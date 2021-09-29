export const GameLevels = [
  'beginner',
  'intermediate',
  'expert',
  'maestro',
] as const;

export type LevelNames = typeof GameLevels[number];

export type Settings = [number, number];

export const GameSettings: Record<LevelNames, Settings> = {
  beginner: [9, 10],
  intermediate: [16, 44],
  expert: [22, 99],
  maestro: [30, 110],
};
