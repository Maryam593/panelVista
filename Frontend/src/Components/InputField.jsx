import React from "react";

const InputField = ({ label, type, name, register, error, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name, { required: `${label} is required` })}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
