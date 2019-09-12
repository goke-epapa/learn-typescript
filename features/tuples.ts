const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

// Tuple -> consistent ordering of elements
const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 40; -> will not work

const sprite: Drink = ['white', true, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
