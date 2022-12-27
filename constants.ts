export const SINGLE_RARITY = {
  common: {
    score: 0,
    name: "common",
  },
  rare: {
    score: 1,
    name: "rare",
  },
  epic: {
    score: 2,
    name: "epic",
  },
  legendary: {
    score: 3,
    name: "legendary",
  },
};

export interface LayerImage {
  id: number;
  name: string;
  image: string;
  score: number;
  scoreLabel: string;
}

export const layer1: LayerImage[] = [
  {
    id: 1,
    name: `name-${1}`,
    image: `https://mock-image-${1}`,
    score: SINGLE_RARITY.common.score,
    scoreLabel: SINGLE_RARITY.common.name,
  },
  {
    id: 2,
    name: `name-${2}`,
    image: `https://mock-image-${2}`,
    score: SINGLE_RARITY.common.score,
    scoreLabel: SINGLE_RARITY.common.name,
  },
  {
    id: 3,
    name: `name-${3}`,
    image: `https://mock-image-${3}`,
    score: SINGLE_RARITY.common.score,
    scoreLabel: SINGLE_RARITY.common.name,
  },
  {
    id: 4,
    name: `name-${4}`,
    image: `https://mock-image-${4}`,
    score: SINGLE_RARITY.common.score,
    scoreLabel: SINGLE_RARITY.common.name,
  },
  {
    id: 5,
    name: `name-${5}`,
    image: `https://mock-image-${5}`,
    score: SINGLE_RARITY.rare.score,
    scoreLabel: SINGLE_RARITY.rare.name,
  },
  {
    id: 6,
    name: `name-${6}`,
    image: `https://mock-image-${6}`,
    score: SINGLE_RARITY.rare.score,
    scoreLabel: SINGLE_RARITY.rare.name,
  },
  {
    id: 7,
    name: `name-${7}`,
    image: `https://mock-image-${7}`,
    score: SINGLE_RARITY.rare.score,
    scoreLabel: SINGLE_RARITY.rare.name,
  },
  {
    id: 8,
    name: `name-${8}`,
    image: `https://mock-image-${8}`,
    score: SINGLE_RARITY.epic.score,
    scoreLabel: SINGLE_RARITY.epic.name,
  },
  {
    id: 9,
    name: `name-${9}`,
    image: `https://mock-image-${9}`,
    score: SINGLE_RARITY.epic.score,
    scoreLabel: SINGLE_RARITY.epic.name,
  },
  {
    id: 10,
    name: `name-${10}`,
    image: `https://mock-image-${10}`,
    score: SINGLE_RARITY.legendary.score,
    scoreLabel: SINGLE_RARITY.legendary.name,
  },
];

export const LAYERS = [layer1, layer1, layer1, layer1];
