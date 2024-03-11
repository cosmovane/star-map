import React from 'react';
import { Html } from 'react-konva-utils';

export default function Tooltip({ children, title, description }) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const [show, setShow] = React.useState(false);

  const handleMouseMove = (event) => {
    // Get the mouse coordinates relative to the Stage and star
    const stage = event.target.getStage();
    const position = stage.getPointerPosition();
    if (position) {
      setMousePosition({ x: position.x, y: position.y });
    }
  };

  return (
    <div>
      <Html>
        <div
          style={{
            position: 'absolute',
            top: mousePosition.y,
            left: mousePosition.x,
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            visibility: show ? 'visible' : 'hidden',
            width: 'max-content',
            marginLeft: '15px',
            display: 'grid',
          }}
        >
          <div style={{ fontSize: '20px' }}>{title}</div>
          <div style={{ fontSize: '15px' }}>{description}</div>
        </div>
      </Html>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>
    </div>
  );
}
