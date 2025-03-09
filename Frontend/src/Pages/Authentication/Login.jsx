import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./LoginSchema";
import InputField from "../../Components/InputField";
import ButtonHandle from "../../Components/ButtonHandle";
import gsap from "gsap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/auth.slice";
import { Link } from "react-router-dom";
const Login = () => {
  const formRef = useRef(null);
  const navigate = useNavigate()
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: "power3.out" }
    );
  }, []);

  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const fields = [
    { label: "Email", name: "email", type: "email", placeholder: "abc@gmail.com" },
    { label: "Secret Key", name: "password", type: "password", placeholder: "secretKey" },
  ];
  
  const dispatch = useDispatch();

const onSubmit = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/user/login", data);

    if (response.status === 200) {
      dispatch(login(response.data));  
      navigate("/user/dashboard");
    }
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
  }
};

  

  return (
    <div className="bg-[#DBDBE4] h-screen flex justify-center items-center">
      <div ref={formRef} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ label, name, type, placeholder }) => {
            const nameParts = name.split(".");
            const errorPath = nameParts.reduce(
              (acc, key) => acc?.[key],
              errors
            );

            return (
              <InputField
                key={name}
                label={label}
                name={name}
                type={type}
                placeholder={placeholder}
                register={register}
                error={isSubmitted && errorPath?.message}
              />
            );
          })}
           <p className="text-center mb-2 mt-2 text-gray-500 text-sm">Want to create an Account? <Link to="/o/auth/user/sign-up" className="text-blue-800">Click here</Link></p>
          <ButtonHandle type="submit" text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
