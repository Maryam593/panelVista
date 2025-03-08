import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { loginSchema } from './LoginSchema';
import InputField from '../../Components/InputField';
import ButtonHandle from '../../Components/ButtonHandle';

const Login = () => {
  const { register, handleSubmit, formState: { errors,isSubmitted } } = useForm({
    resolver: zodResolver(loginSchema),
    mode : "onSubmit"
  });
 const fields = [
    { label: "Email", name: "email", type: "email", placeholder: "abc@gmail.com" },
    { label: "Secret Key", name: "password", type: "password", placeholder: "secretKey" },
 ]
  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className="bg-[#DBDBE4] h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map(({ label, name, type, placeholder }) => (
            <InputField
              key={name}
              label={label}
              name={name}
              type={type}
              placeholder={placeholder}
              register={register}
              error={isSubmitted && errors?.[name]}
            />
          ))}
          <ButtonHandle type="submit" text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;