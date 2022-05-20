const dimensions: Array<[number, number]> = [
  [400, 400],
  [300, 400],
  [450, 400],
  [400, 450],
  [400, 500],
  [400, 800],
  [300, 400],
  [300, 200],
  [300, 300],
  [100, 500],
  [500, 500],
  [300, 200],
];

const generateStockImages = (dimensions: Array<[number, number]>) =>
  dimensions.map(([w, h]) => `https://picsum.photos/${w}/${h}`);

export { generateStockImages, dimensions };
