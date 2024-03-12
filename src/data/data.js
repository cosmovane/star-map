import { BASE_STAR_RADIUS, STAR_COLORS, offset } from '../constants/constants';

// Source: https://theskylive.com/sky/constellations/orion-bright-stars

export const starData = [
  {
    x: 240 - offset,
    y: 375 - offset,
    radius: BASE_STAR_RADIUS + 0.5,
    color: STAR_COLORS.K3333,
    name: 'Betelgeuse',
    class: 'Supergiant',
  }, // Hombro izquierdo
  {
    x: 370 - offset,
    y: 275 - offset,
    radius: BASE_STAR_RADIUS + 3.54,
    color: STAR_COLORS.K13121,
    name: 'Meissa',
    class: 'Giant',
  }, // Cuello
  {
    x: 510 - offset,
    y: 375 - offset,
    radius: BASE_STAR_RADIUS + 1.64,
    color: STAR_COLORS.K14087,
    name: 'Bellatrix',
    class: 'Giant',
  }, // Hombro derecho
  {
    x: 370 - offset,
    y: 625 - offset,
    radius: BASE_STAR_RADIUS + 2.05,
    color: STAR_COLORS.K13831,
    name: 'Alnitak',
  }, // Estrella izquierda del cinturon
  {
    x: 420 - offset,
    y: 595 - offset,
    radius: BASE_STAR_RADIUS + 1.7,
    color: STAR_COLORS.K13348,
    name: 'Alnilam',
  }, // Estrella central del cinturon
  {
    x: 480 - offset,
    y: 555 - offset,
    radius: BASE_STAR_RADIUS + 2.23,
    color: STAR_COLORS.K14087,
    name: 'Mintaka',
  }, // Estrella derecha del cinturon
  {
    x: 330 - offset,
    y: 825 - offset,
    radius: BASE_STAR_RADIUS + 2.06,
    color: STAR_COLORS.K12902,
    name: 'Saiph',
    class: 'Hypergiant',
  }, // Pie izquierdo
  {
    x: 600 - offset,
    y: 755 - offset,
    radius: BASE_STAR_RADIUS + 0.12,
    color: STAR_COLORS.K10516,
    name: 'Rigel',
    class: 'Supergiant',
  }, // Pie derecho
  {
    x: 750 - offset,
    y: 355 - offset,
    radius: BASE_STAR_RADIUS + 3.19,
    color: STAR_COLORS.K6625,
    name: 'Tabit',
    class: 'Main-sequence',
  }, // Estrella central del escudo
  {
    x: 730 - offset,
    y: 255 - offset,
    radius: BASE_STAR_RADIUS + 4.07,
    color: STAR_COLORS.K4409,
    name: 'Omicron-2 Orionis',
    class: 'Giant',
  }, // Estrella superior del escudo
  {
    x: 730 - offset,
    y: 455 - offset,
    radius: BASE_STAR_RADIUS + 3.72,
    color: STAR_COLORS.K13121,
    name: 'Pi-5 Orionis',
    class: 'Giant',
  }, // Estrella inferior del escudo
  {
    x: 125 - offset,
    y: 300 - offset,
    radius: BASE_STAR_RADIUS + 4.12,
    color: STAR_COLORS.K8486,
    name: 'Mu Orionis',
    class: 'Main-sequence',
  }, // Codo
  {
    x: 70 - offset,
    y: 190 - offset,
    radius: BASE_STAR_RADIUS + 4.48,
    color: STAR_COLORS.K13121,
    name: 'Xi Orionis',
    class: 'Sub-giant',
  }, // Mano
  {
    x: 95 - offset,
    y: 175 - offset,
    radius: BASE_STAR_RADIUS + 4.42,
    color: STAR_COLORS.K12902,
    name: 'Nu Orionis',
    class: 'Main-sequence',
  }, // Mano
  {
    x: 110 - offset,
    y: 45 - offset,
    radius: BASE_STAR_RADIUS + 4.41,
    color: STAR_COLORS.K6007,
    name: 'Chi-1 Orionis',
    class: 'Hypergiant',
  }, // Espada
  {
    x: 160 - offset,
    y: 35 - offset,
    radius: BASE_STAR_RADIUS + 4.63,
    color: STAR_COLORS.K7591,
    name: 'Chi-2 Orionis',
    class: 'Supergiant',
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
