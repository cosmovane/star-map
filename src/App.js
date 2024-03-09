import React from 'react';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';

const starData = [
  { x: 240, y: 400, name: 'Betelgeuse' }, // Hombro izquierdo
  { x: 370, y: 300, name: 'Meissa' }, // Cuello
  { x: 510, y: 400, name: 'Bellatrix' }, // Hombro derecho
  { x: 370, y: 650, name: 'Alnitak' }, // Estrella izquierda del cinturon
  { x: 420, y: 620, name: 'Alnilam' }, // Estrella central del cinturon
  { x: 480, y: 580, name: 'Mintaka' }, // Estrella derecha del cinturon
  { x: 330, y: 850, name: 'Shaiph' }, // Pie izquierdo
  { x: 600, y: 820, name: 'Rigel' }, // Pie derecho
  { x: 750, y: 380, name: 'Pi-3 Orionis' }, // Estrella central del escudo
  { x: 730, y: 280, name: 'Omicron-2 Orionis' }, // Estrella superior del escudo
  { x: 730, y: 480, name: 'Pi-5 Orionis' }, // Estrella inferior del escudo
  { x: 125, y: 300, name: 'Mu Orionis' }, // Codo
  { x: 70, y: 190, name: 'Xi Orionis' }, // Mano
  { x: 95, y: 175, name: 'Nu Orionis' }, // Mano
  { x: 110, y: 45, name: 'Chi-1 Orionis' }, // Espada
  { x: 160, y: 35, name: 'Chi-2 Orionis' }, // Espada
];

const lineData = [
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
const ConstellationExplorer = () => {
  const handleMouseEnter = (event, name) => {
    console.log(`Star: ${name}`);
  };

  return (
    <div>
      <Stage
        width={window.outerWidth}
        height={window.outerHeight}
        style={{
          background: 'black',
        }}
      >
        <Layer>
          {lineData.map((line, index) => (
            <Line
              key={index}
              points={[
                starData[line[0]].x,
                starData[line[0]].y,
                starData[line[1]].x,
                starData[line[1]].y,
              ]}
              stroke='white'
            />
          ))}
          {starData.map((star, index) => (
            <Circle
              key={index}
              x={star.x}
              y={star.y}
              radius={4}
              fill='yellow'
              onMouseEnter={(event) => handleMouseEnter(event, star.name)}
            />
          ))}
          {starData.map((star, index) => (
            <Text
              key={index}
              x={star.x}
              y={star.y}
              text={star.name}
              fontSize={12}
              fill='white'
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ConstellationExplorer;
