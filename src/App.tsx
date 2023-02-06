import React, { useState } from "react";
import DeliveryForm from "./Components/DeliveryForm";
import OutputBox from "./Components/OutputBox";

interface FormData {
  cartValue: number;
  deliveryDistance: number;
  amountOfItems: number;
  dateOfDelivery: Date;
}

const App = () => {
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
    <div>
      <DeliveryForm onSubmit={handleFormSubmit} /><br/>
      <OutputBox formData={formData} />
    </div>
    );
  };
    
  export default App;
