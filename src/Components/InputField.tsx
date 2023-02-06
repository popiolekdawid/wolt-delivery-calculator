import React from 'react';

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
    <label htmlFor={name}>{label}:</label>
    <input
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
