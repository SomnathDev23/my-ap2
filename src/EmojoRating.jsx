import React, { useState } from 'react';

const EmojiRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h1>Emoji Rating</h1>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span key={value} onClick={() => handleRating(value)}>
            {rating >= value ? '⭐️' : '☆'}
          </span>
        ))}
      </div>
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default EmojiRating;
