import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isPassword = false,
  required = false,
  subLabel = ''
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="mb-4">
      <label className="block text-sm mb-2 text-gray-700">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
        {subLabel && <span className="ml-1 text-gray-400">({subLabel})</span>}
      </label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-base placeholder:text-sm px-3 py-1.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
