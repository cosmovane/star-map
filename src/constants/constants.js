export const BASE_STAR_RADIUS = 3; // Let's consider this the minimum size for a star so they're visible in the canvas

export const MAX_BACKGROUND_STARS = 2000; // Maximum amount of stars in the background

// A star color is given by it's surface temperature. The colors stored in the STAR_COLORS object are given by their temperature in Kelvin
export const STAR_COLORS = {
  K14087: 'rgb(174,192,256)',
  K13831: 'rgb(175,193,256)',
  K13348: 'rgb(178,195,256)',
  K13121: 'rgb(179,196,256)',
  K12902: 'rgb(180,197,256)',
  K10516: 'rgb(204,217,256)',
  K8486: 'rgb(229,233,256)',
  K7591: 'rgb(242,242,256)',
  K6625: 'rgb(256,249,250)',
  K6007: 'rgb(256,244,235)',
  K4409: 'rgb(256,225,185)',
  K3333: 'rgb(256,159,64)',
  WHITE: 'rgb(255, 255, 255)',
  DEFAULT: 'rgb(255, 255, 0)',
};

export const BACKGROUND_COLOR = 'rgb(2, 1, 31)';
