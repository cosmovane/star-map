import React from 'react';
import { Stage, Layer, Circle, Line } from 'react-konva';
import { lineData, starData } from './data/data';
import Tooltip from './components/Tooltip';

// Random amount of stars to display in the background
const starsAmount = Math.ceil(Math.random() * 1000 + 1000);

const ConstellationExplorer = () => {
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
          {Array.from({ length: starsAmount }, (_, index) => (
            <Circle
              key={index}
              x={Math.random() * window.outerWidth}
              y={Math.random() * window.outerHeight}
              radius={Math.random() * 1.5} // Random size for stars
              fill='#FFFFFF'
              opacity={0.4}
            />
          ))}

          {/* Lines connecting constelation stars */}
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

          {/* Stars */}
          {starData.map((star, index) => (
            <Tooltip key={index} text={star.name}>
              {/* Create a semi-transparent circle behind the main circle to simulate star's shine */}
              <Circle
                x={star.x}
                y={star.y}
                radius={star.radius * 1.8}
                fill={star.color}
                opacity={0.3}
              />
              {/* Main circle representing the star */}
              <Circle
                x={star.x}
                y={star.y}
                radius={star.radius}
                fill={star.color}
              />
            </Tooltip>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ConstellationExplorer;
