import React from 'react';

class CreditCardMasking extends React.Component {
  maskCreditCard = (creditCardNumber) => {
    // Remove spaces and keep only digits
    const digitsOnly = creditCardNumber.replace(/\s/g, '');

    // Mask the middle digits
    const maskedNumber =
      digitsOnly.replace(/(\d{6})\d+(\d{4})$/, '$1******$2');

     const maskedNumber2= maskedNumber.replace(/(.{4})/g, '$1 ');

    return maskedNumber2;
  };

  render() {
    const originalCreditCardNumber = "1111 2222 3333 4444";
    const maskedCreditCardNumber = this.maskCreditCard(originalCreditCardNumber);

    return (
      <div>
        <p>Original Credit Card Number: {originalCreditCardNumber}</p>
        <p>Masked Credit Card Number: {maskedCreditCardNumber}</p>
      </div>
    );
  }
}

export default CreditCardMasking;
