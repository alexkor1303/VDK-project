import React from "react";

interface InputProps {
  description: string;
  id: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  className?: string;
}
export const Input = ({
  description,
  id,
  name,
  value = "",
  onChange,
  type = "text",
  className = "",
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{description}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};
