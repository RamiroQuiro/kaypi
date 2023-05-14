import { useState } from 'react';

function useDrag() {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setDragging(true);
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return {
    position,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}

export default useDrag;