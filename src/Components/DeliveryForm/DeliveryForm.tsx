import React, { useState } from 'react';
import InputField from '../InputField';
import './DeliveryForm.css';

interface FormData {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  dateOfDelivery: Date;
}

interface DeliveryFormProps {
  onSubmit: (formData: FormData) => void;
}

const DeliveryForm = ({ onSubmit }: DeliveryFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    cartValue: 0,
    deliveryDistance: 0,
    amountOfItems: 0,
    dateOfDelivery: new Date(),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: Number(value),
    }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    const timezoneOffset = selectedDate.getTimezoneOffset();
    selectedDate.setMinutes(selectedDate.getMinutes() - timezoneOffset);
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateOfDelivery: selectedDate,
    }));
  };

  return (
    <form className="form" onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData);
      }}>
      <InputField
        label="Cart Value (EUR)"
        type="number"
        name="cartValue"
        value={formData.cartValue}
        min={0}
        onChange={handleInputChange}
      />
      <InputField
        label="Delivery Distance (m)"
        type="number"
        name="deliveryDistance"
        value={formData.deliveryDistance}
        min={0}
        onChange={handleInputChange}
      />
      <InputField
        label="Amount of Items"
        type="number"
        name="amountOfItems"
        value={formData.amountOfItems}
        min={0}
        onChange={handleInputChange}
      />
      <InputField
          label="Delivery Date (UTC)"
          type="datetime-local"
          name="dateOfDelivery"
          value={formData.dateOfDelivery.toISOString().substr(0, 16)}
          min={new Date().toISOString().substr(0, 16)}
          onChange={handleDateChange}
        />
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default DeliveryForm;