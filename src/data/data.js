import { BASE_STAR_RADIUS, STAR_COLORS } from '../constants/constants';

// Source: https://theskylive.com/sky/constellations/orion-bright-stars

export const starData = [
  {
    x: 240,
    y: 375,
    radius: BASE_STAR_RADIUS + 0.5,
    color: STAR_COLORS.K3333,
    name: 'Betelgeuse',
  }, // Hombro izquierdo
  {
    x: 370,
    y: 275,
    radius: BASE_STAR_RADIUS + 3.54,
    color: STAR_COLORS.K13121,
    name: 'Meissa',
  }, // Cuello
  {
    x: 510,
    y: 375,
    radius: BASE_STAR_RADIUS + 1.64,
    color: STAR_COLORS.K14087,
    name: 'Bellatrix',
  }, // Hombro derecho
  {
    x: 370,
    y: 625,
    radius: BASE_STAR_RADIUS,
    color: STAR_COLORS.DEFAULT,
    name: 'Alnitak',
  }, // Estrella izquierda del cinturon
  {
    x: 420,
    y: 595,
    radius: BASE_STAR_RADIUS,
    color: STAR_COLORS.DEFAULT,
    name: 'Alnilam',
  }, // Estrella central del cinturon
  {
    x: 480,
    y: 555,
    radius: BASE_STAR_RADIUS,
    color: STAR_COLORS.DEFAULT,
    name: 'Mintaka',
  }, // Estrella derecha del cinturon
  {
    x: 330,
    y: 825,
    radius: BASE_STAR_RADIUS + 2.06,
    color: STAR_COLORS.K12902,
    name: 'Saiph',
  }, // Pie izquierdo
  {
    x: 600,
    y: 755,
    radius: BASE_STAR_RADIUS + 0.12,
    color: STAR_COLORS.K10516,
    name: 'Rigel',
  }, // Pie derecho
  {
    x: 750,
    y: 355,
    radius: BASE_STAR_RADIUS + 3.19,
    color: STAR_COLORS.K6625,
    name: 'Tabit',
  }, // Estrella central del escudo
  {
    x: 730,
    y: 255,
    radius: BASE_STAR_RADIUS + 4.07,
    color: STAR_COLORS.K4409,
    name: 'Omicron-2 Orionis',
  }, // Estrella superior del escudo
  {
    x: 730,
    y: 455,
    radius: BASE_STAR_RADIUS + 3.72,
    color: STAR_COLORS.K13121,
    name: 'Pi-5 Orionis',
  }, // Estrella inferior del escudo
  {
    x: 125,
    y: 300,
    radius: BASE_STAR_RADIUS + 4.12,
    color: STAR_COLORS.K8486,
    name: 'Mu Orionis',
  }, // Codo
  {
    x: 70,
    y: 190,
    radius: BASE_STAR_RADIUS + 4.48,
    color: STAR_COLORS.K13121,
    name: 'Xi Orionis',
  }, // Mano
  {
    x: 95,
    y: 175,
    radius: BASE_STAR_RADIUS + 4.42,
    color: STAR_COLORS.K12902,
    name: 'Nu Orionis',
  }, // Mano
  {
    x: 110,
    y: 45,
    radius: BASE_STAR_RADIUS + 4.41,
    color: STAR_COLORS.K6007,
    name: 'Chi-1 Orionis',
  }, // Espada
  {
    x: 160,
    y: 35,
    radius: BASE_STAR_RADIUS + 4.63,
    color: STAR_COLORS.K7591,
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
