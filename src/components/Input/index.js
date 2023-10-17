import React from "react";

const Input = ({
  label = "",
  name = "",
  type = "",
  className = "",
  inputClassName = "",
  isRequired = false,
  placeholder = "",
  value,
  onChange
}) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={name} className={`${inputClassName} block text-sm font-medium text-gray-800 mb-2`}>
        {label}
      </label>
      <input
        id={name}
        className={`${inputClassName} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
