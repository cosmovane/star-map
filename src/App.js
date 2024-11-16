import React, { useEffect, useState } from 'react';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';
import { lineData, starData } from './data/data';
import Tooltip from './components/Tooltip';
import {
  BACKGROUND_COLOR,
  MAX_BACKGROUND_STARS,
  STAR_COLORS,
  offset,
  offsetY,
} from './constants/constants';

// Random amount of stars to display in the background
const totalBackgroundStars = Math.ceil(
  Math.random() * MAX_BACKGROUND_STARS + MAX_BACKGROUND_STARS
);

// TODO: Add README.md and belt stars data

const OrionConstellation = () => {
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setStageWidth(window.innerWidth);
      setStageHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Center coordinates relative to the stage
  const centerX = stageWidth / 2 - offset;
  const centerY = stageHeight / 2 - offsetY;

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
          <Text
            x={10}
            y={10}
            text='Orion Constellation'
            fill={STAR_COLORS.WHITE}
            fontSize={25}
          />
          <Text
            x={10}
            y={40}
            text='Hover over any star to see more information'
            fill={STAR_COLORS.WHITE}
            fontSize={15}
          />
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
                starData[line[0]].x + centerX,
                starData[line[0]].y + centerY,
                starData[line[1]].x + centerX,
                starData[line[1]].y + centerY,
              ]}
              stroke={STAR_COLORS.WHITE}
              opacity={0.5}
            />
          ))}

          {/* Stars */}
          {starData.map((star, index) => (
            <Tooltip
              key={index}
              title={star.name}
              description={star.class}
              temperature={star.temperature}
            >
              {/* Create a semi-transparent circle behind the main circle to simulate star's shine */}
              <Circle
                x={star.x + centerX}
                y={star.y + centerY}
                radius={star.radius * 1.8}
                fill={star.color}
                opacity={0.3}
              />
              {/* Main circle representing the star */}
              <Circle
                x={star.x + centerX}
                y={star.y + centerY}
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
