import React, { useState } from 'react';

const ColorChanger = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFD633'];

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div>
      <h1 style={{ color: currentColor }}>Color Changer</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
