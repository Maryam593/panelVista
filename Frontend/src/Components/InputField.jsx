import React from 'react'

const InputField = ({ label, type, name, register, error,placeholder}) => {
  // const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 font-medium'>{label}</label>
      <input
        type={type}
        {...register(name)}
        className='w-full p-2 border rounded-md'
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  )
}

export default InputField
