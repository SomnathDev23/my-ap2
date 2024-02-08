import React, { useState } from 'react';

const FunnyComponent = () => {
  const [message, setMessage] = useState("Why did the React developer go broke?");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    if (!buttonClicked) {
      setMessage("Because he didn't know how to state his income!");
      setButtonClicked(true);
    }
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Tell me another one!</button>
    </div>
  );
};

export default FunnyComponent;
