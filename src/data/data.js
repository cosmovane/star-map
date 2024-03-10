import { BASE_STAR_RADIUS, COLORS } from '../constants/constants';

// Source: https://theskylive.com/sky/constellations/orion-bright-stars

export const starData = [
  {
    x: 240,
    y: 375,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Betelgeuse',
  }, // Hombro izquierdo
  {
    x: 370,
    y: 275,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Meissa',
  }, // Cuello
  {
    x: 510,
    y: 375,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Bellatrix',
  }, // Hombro derecho
  {
    x: 370,
    y: 625,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Alnitak',
  }, // Estrella izquierda del cinturon
  {
    x: 420,
    y: 595,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Alnilam',
  }, // Estrella central del cinturon
  {
    x: 480,
    y: 555,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Mintaka',
  }, // Estrella derecha del cinturon
  {
    x: 330,
    y: 825,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Shaiph',
  }, // Pie izquierdo
  {
    x: 600,
    y: 755,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Rigel',
  }, // Pie derecho
  {
    x: 750,
    y: 355,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Tabit',
  }, // Estrella central del escudo
  {
    x: 730,
    y: 255,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Omicron-2 Orionis',
  }, // Estrella superior del escudo
  {
    x: 730,
    y: 455,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Pi-5 Orionis',
  }, // Estrella inferior del escudo
  {
    x: 125,
    y: 300,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Mu Orionis',
  }, // Codo
  {
    x: 70,
    y: 190,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Xi Orionis',
  }, // Mano
  {
    x: 95,
    y: 175,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Nu Orionis',
  }, // Mano
  {
    x: 110,
    y: 45,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Chi-1 Orionis',
  }, // Espada
  {
    x: 160,
    y: 35,
    radius: BASE_STAR_RADIUS,
    color: COLORS.BASE,
    name: 'Chi-2 Orionis',
  }, // Espada
];

export const lineData = [
  [0, 1],
  [1, 2],
  [2, 5],
  [0, 3],
  [3, 4],
  [4, 5],
  [3, 6],
  [5, 7],
  [2, 8],
  [8, 9],
  [8, 10],
  [0, 11],
  [11, 12],
  [11, 13],
  [12, 14],
  [13, 15],
];
