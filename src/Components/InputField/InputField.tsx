import React from 'react';
import "./InputField.css"

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string | number;
  min?: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, type, name, value, min, onChange }: InputFieldProps) => (
  <div>
    <label className="form-label" htmlFor={name}>{label}:</label>
    <input
      className= {type}
      type={type}
      name={name}
      id={name}
      value={value}
      min={min}
      onChange={onChange}
    />
  </div>
);

export default InputField;
