import React from 'react';
import { Stage, Layer, Circle, Line } from 'react-konva';
import { lineData, starData } from './data/data';
import Tooltip from './components/Tooltip';
import {
  BACKGROUND_COLOR,
  MAX_BACKGROUND_STARS,
  STAR_COLORS,
} from './constants/constants';

// Random amount of stars to display in the background
const totalBackgroundStars = Math.ceil(
  Math.random() * MAX_BACKGROUND_STARS + MAX_BACKGROUND_STARS
);

const OrionConstellation = () => {
  return (
    <div>
      <Stage
        width={window.outerWidth}
        height={window.outerHeight}
        style={{
          background: BACKGROUND_COLOR,
        }}
      >
        <Layer>
          {/* Background stars */}
          {Array.from({ length: totalBackgroundStars }, (_, index) => (
            <Circle
              key={index}
              x={Math.random() * window.outerWidth}
              y={Math.random() * window.outerHeight}
              radius={Math.random() * 1.5} // Random size for stars
              fill={STAR_COLORS.WHITE}
              opacity={Math.random() * 0.5} // Random opacity for stars
            />
          ))}

          {/* Lines connecting constellation stars */}
          {lineData.map((line, index) => (
            <Line
              key={index}
              points={[
                starData[line[0]].x,
                starData[line[0]].y,
                starData[line[1]].x,
                starData[line[1]].y,
              ]}
              stroke={STAR_COLORS.WHITE}
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

export default OrionConstellation;
