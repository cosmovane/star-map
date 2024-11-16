export const BASE_STAR_RADIUS = 3; // Let's consider this the minimum size for a star so they're visible in the canvas

export const MAX_BACKGROUND_STARS = 2000; // Maximum amount of stars in the background

// A star color is given by it's surface temperature. The colors stored in the STAR_COLORS object are given by their temperature in Kelvin
export const STAR_COLORS = {
  K35000: 'rgb(179,196,256)',
  K29000: 'rgb(175,193,256)',
  K22000: 'rgb(174,192,256)',
  K27000: 'rgb(178,195,256)',
  K26500: 'rgb(180,197,256)',
  K19000: 'rgb(242,242,256)',
  K13000: 'rgb(179,196,256)',
  K11000: 'rgb(204,217,256)',
  K8300: 'rgb(229,233,256)',
  K6500: 'rgb(256,249,250)',
  K6000: 'rgb(256,244,235)',
  K4500: 'rgb(256,225,185)',
  K3500: 'rgb(256,159,64)',
  WHITE: 'rgb(255, 255, 255)',
  DEFAULT: 'rgb(255, 255, 0)',
};
export const BACKGROUND_COLOR = 'rgb(2, 1, 31)';
export const START_TYPE = {
  Supergiant: 'Supergiant',
  Giant: 'Giant',
  Hypergiant: 'Hypergiant',
  'Main-sequence': 'Main-sequence',
  'Sub-giant': 'Sub-giant',
};

export const offset = 200; // Offset to center the constellation in the canvas
export const offsetY = 225; // Offset to center the constellation in the canvas
