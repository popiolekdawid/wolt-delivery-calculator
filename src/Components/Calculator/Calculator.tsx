import React, { useState } from "react";
import DeliveryForm from "../DeliveryForm";
import OutputBox from "../OutputBox";
import "./Calculator.css"

interface FormData {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  dateOfDelivery: Date;
}

const Calculator = () => {
  const [formData, setFormData] = useState<FormData>({
    cartValue: 0,
    deliveryDistance: 0,
    amountOfItems: 0,
    dateOfDelivery: new Date(),
  });

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
  };

  return (
    <div className="Calculator">
      <h1 className="title">Delivery Fee Calculator</h1>
      <DeliveryForm onSubmit={handleFormSubmit} /><br/>
      <OutputBox formData={formData} />
    </div>
    );
  };
    
  export default Calculator;
