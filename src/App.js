import React from 'react';
import { Stage, Layer, Circle, Line } from 'react-konva';
import { lineData, starData } from './constants/data';
import Tooltip from './components/Tooltip';

const starAmount = Math.ceil(Math.random() * 500 + 500);

const ConstellationExplorer = () => {
  // Random amount of stars to display (from 500-1000)
  console.log('🚀 ~ starAmount', starAmount);

  return (
    <div>
      <Stage
        width={window.outerWidth}
        height={window.outerHeight}
        style={{
          background: '#030026',
        }}
      >
        <Layer>
          {/* Background stars */}
          {Array.from({ length: 1000 }, (_, index) => (
            <Circle
              key={index}
              x={Math.random() * window.outerWidth}
              y={Math.random() * window.outerHeight}
              radius={Math.random() * 1.5} // Random size for stars
              fill='#FFFFFF'
              opacity={0.4}
            />
          ))}
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
              opacity={0.5}
            />
          ))}
          {starData.map((star, index) => (
            <Tooltip key={index} text={star.name}>
              {/* Create a semi-transparent circle behind the main circle */}
              <Circle
                x={star.x}
                y={star.y}
                radius={7}
                fill='yellow'
                opacity={0.3}
              />
              {/* Main circle representing the star */}
              <Circle
                x={star.x}
                y={star.y}
                radius={4}
                fill='yellow'
                // onMouseEnter={(event) => handleMouseEnter(event, star.name)}
              />
            </Tooltip>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ConstellationExplorer;
