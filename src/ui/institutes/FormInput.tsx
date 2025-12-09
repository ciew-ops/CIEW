import React from "react";

interface FormInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.04)] 
              bg-transparent text-[#fff6e6] placeholder-[#f0dca6]
              focus:outline-none focus:border-[rgba(255,255,255,0.1)]
              transition-colors duration-200"
  />
);

export default FormInput;
