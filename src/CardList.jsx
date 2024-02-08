import React, { useState } from 'react';

const CardList = ({ cards }) => {
  const [displayedCards, setDisplayedCards] = useState(5);
  const [cardHolderName, setCardHolderName] = useState('');
  const filteredCards = cardHolderName
    ? cards.filter(card => card.holder.includes(cardHolderName))
    : cards;

  const showMore = () => {
    setDisplayedCards(displayedCards + 5);
  };

  const showLess = () => {
    setDisplayedCards(displayedCards - 5);
  };

  return (
    <div>
      <label>
        Card Holder:
        <input
          type="text"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
        />
      </label>

      {filteredCards.slice(0, displayedCards).map((card, index) => (
        <div key={index} className="card">
          <p>{`Card Holder: ${card.holder}`}</p>
          <p>{`Card Number: ${card.number}`}</p>
        </div>
      ))}

      {filteredCards.length > displayedCards && (
        <div>
          <button onClick={showMore}>Show More</button>
          {displayedCards > 5 && <button onClick={showLess}>Show Less</button>}
        </div>
      )}
    </div>
  );
};
export default CardList