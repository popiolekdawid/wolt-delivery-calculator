import React, { useState, useEffect } from 'react';

interface Props {
  formData: {
    cartValue: number;
    amountOfItems: number;
    deliveryDistance: number;
    dateOfDelivery: Date;
  };
}

const OutputBox = ({ formData }: Props) => {
  const [deliveryFee, setDeliveryFee] = useState(0);

  useEffect(() => {
    const calculateFee = (): void => {
      let fee = 0;
      const { cartValue, amountOfItems, deliveryDistance, dateOfDelivery } = formData;

      if (cartValue < 10) {
        fee += 10 - cartValue;
      }

      if (deliveryDistance <= 1000) {
        fee += 2;
      } else {
        fee += 2 + Math.ceil((deliveryDistance - 1000) / 500) * 1;
      }

      if (amountOfItems >= 5) {
        const bulkFee = amountOfItems >= 12 ? 1.2 : 0.5;
        fee += (amountOfItems - 4) * bulkFee;
      }

      const orderDay = dateOfDelivery.getUTCDay();
      const orderHour = dateOfDelivery.getUTCHours();
      if (orderDay === 5 && orderHour >= 15 && orderHour <= 19) {
        fee *= 1.2;
      }

      if (fee > 15) {
        fee = 15;
      }

      if (cartValue >= 100) {
        fee = 0;
      }

      setDeliveryFee(fee);
    };

    calculateFee();
  }, [formData]);

  return (
    <div>
      <label className="output-container">Delivery Fee: {deliveryFee}€</label>
    </div>
  );
};

export default OutputBox;
