import { dataset } from "../dataset";

const poisonous = dataset.filter(([, , isPoisonous]) => isPoisonous);
const nonPoisonous = dataset.filter(([, , isPoisonous]) => !isPoisonous);

const mapToPoint = ([x, y]: [number, number]) => ({ x, y });

// @ts-ignore
window.visualization = window.visualization || {};

// @ts-ignore
window.visualization.poisonousX = poisonous.map(mapToPoint).map(({ x }) => x);
// @ts-ignore
window.visualization.poisonousY = poisonous.map(mapToPoint).map(({ y }) => y);

// @ts-ignore
window.visualization.nonPoisonousX = nonPoisonous
  // @ts-ignore
  .map(mapToPoint)
  .map(({ x }) => x);
// @ts-ignore
window.visualization.nonPoisonousY = nonPoisonous
  // @ts-ignore
  .map(mapToPoint)
  .map(({ y }) => y);
