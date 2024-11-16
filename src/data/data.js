import {
  BASE_STAR_RADIUS,
  START_TYPE,
  STAR_COLORS,
  offset,
} from '../constants/constants';

// Source: https://theskylive.com/sky/constellations/orion-bright-stars

export const starData = [
  {
    x: 240 - offset,
    y: 375 - offset,
    radius: BASE_STAR_RADIUS + 0.5,
    color: STAR_COLORS.K3500,
    name: 'Betelgeuse',
    class: START_TYPE.Supergiant,
    temperature: '3,500 Kelvin',
  }, // Hombro izquierdo
  {
    x: 370 - offset,
    y: 275 - offset,
    radius: BASE_STAR_RADIUS + 3.54,
    color: STAR_COLORS.K35000,
    name: 'Meissa',
    class: START_TYPE.Giant,
    temperature: '35,000 Kelvin',
  }, // Cuello
  {
    x: 510 - offset,
    y: 375 - offset,
    radius: BASE_STAR_RADIUS + 1.64,
    color: STAR_COLORS.K22000,
    name: 'Bellatrix',
    class: START_TYPE.Giant,
    temperature: '22,000 Kelvin',
  }, // Hombro derecho
  {
    x: 370 - offset,
    y: 625 - offset,
    radius: BASE_STAR_RADIUS + 2.05,
    color: STAR_COLORS.K29000,
    name: 'Alnitak',
    class: START_TYPE.Supergiant,
    temperature: '29,000 Kelvin',
  }, // Estrella izquierda del cinturon
  {
    x: 420 - offset,
    y: 595 - offset,
    radius: BASE_STAR_RADIUS + 1.7,
    color: STAR_COLORS.K27000,
    name: 'Alnilam',
    class: START_TYPE.Supergiant,
    temperature: '27,000 Kelvin',
  }, // Estrella central del cinturon
  {
    x: 480 - offset,
    y: 555 - offset,
    radius: BASE_STAR_RADIUS + 2.23,
    color: STAR_COLORS.K22000,
    name: 'Mintaka',
    temperature: '22,000 Kelvin',
  }, // Estrella derecha del cinturon
  {
    x: 330 - offset,
    y: 825 - offset,
    radius: BASE_STAR_RADIUS + 2.06,
    color: STAR_COLORS.K26500,
    name: 'Saiph',
    class: START_TYPE.Hypergiant,
    temperature: '26,500 Kelvin',
  }, // Pie izquierdo
  {
    x: 600 - offset,
    y: 755 - offset,
    radius: BASE_STAR_RADIUS + 0.12,
    color: STAR_COLORS.K11000,
    name: 'Rigel',
    class: START_TYPE.Supergiant,
    temperature: '11,000 Kelvin',
  }, // Pie derecho
  {
    x: 750 - offset,
    y: 355 - offset,
    radius: BASE_STAR_RADIUS + 3.19,
    color: STAR_COLORS.K6500,
    name: 'Tabit',
    class: START_TYPE['Main-sequence'],
    temperature: '6,500 Kelvin',
  }, // Estrella central del escudo
  {
    x: 730 - offset,
    y: 255 - offset,
    radius: BASE_STAR_RADIUS + 4.07,
    color: STAR_COLORS.K4500,
    name: 'Omicron-2 Orionis',
    class: START_TYPE.Giant,
    temperature: '4,500 Kelvin',
  }, // Estrella superior del escudo
  {
    x: 730 - offset,
    y: 455 - offset,
    radius: BASE_STAR_RADIUS + 3.72,
    color: STAR_COLORS.K13000,
    name: 'Pi-5 Orionis',
    class: START_TYPE.Giant,
    temperature: '13,000 Kelvin',
  }, // Estrella inferior del escudo
  {
    x: 125 - offset,
    y: 300 - offset,
    radius: BASE_STAR_RADIUS + 4.12,
    color: STAR_COLORS.K8300,
    name: 'Mu Orionis',
    class: START_TYPE['Main-sequence'],
    temperature: '8,300 Kelvin',
  }, // Codo
  {
    x: 70 - offset,
    y: 190 - offset,
    radius: BASE_STAR_RADIUS + 4.48,
    color: STAR_COLORS.K35000,
    name: 'Xi Orionis',
    class: START_TYPE['Sub-giant'],
    temperature: '35,000 Kelvin',
  }, // Mano
  {
    x: 95 - offset,
    y: 175 - offset,
    radius: BASE_STAR_RADIUS + 4.42,
    color: STAR_COLORS.K26500,
    name: 'Nu Orionis',
    class: START_TYPE['Main-sequence'],
    temperature: '26,500 Kelvin',
  }, // Mano
  {
    x: 110 - offset,
    y: 45 - offset,
    radius: BASE_STAR_RADIUS + 4.41,
    color: STAR_COLORS.K6000,
    name: 'Chi-1 Orionis',
    class: START_TYPE.Hypergiant,
    temperature: '6,000 Kelvin',
  }, // Espada
  {
    x: 160 - offset,
    y: 35 - offset,
    radius: BASE_STAR_RADIUS + 4.63,
    color: STAR_COLORS.K19000,
    name: 'Chi-2 Orionis',
    class: START_TYPE.Supergiant,
    temperature: '19,000 Kelvin',
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
