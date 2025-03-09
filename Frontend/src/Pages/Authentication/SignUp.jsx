import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { signupSchema } from "./SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import InputField from "../../Components/InputField";
import ButtonHandle from "../../Components/ButtonHandle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/slice/auth.slice";
import { Link } from "react-router-dom";
const SignUp = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: "power3.out" }
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await axios.post(
        "http://localhost:3000/user/sign-up",
        data
      );
      console.log("response",response)

      if (response.status === 201) {
        console.log("User Created:", response.data);
        dispatch(signUp(response.data));
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }
  };

  const fields = [
    {
      label: "First Name",
      name: "FullName.firstName",
      type: "text",
      placeholder: "John",
    },
    {
      label: "Last Name",
      name: "FullName.lastName",
      type: "text",
      placeholder: "Doe",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "abc@gmail.com",
    },
    {
      label: "Secret Key",
      name: "password",
      type: "password",
      placeholder: "secretKey",
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div
        className="bg-white p-6 rounded-lg shadow-md w-96 signup-container"
        ref={formRef}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
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
          <p className="text-center mb-2 mt-2 text-gray-500 text-sm">if you are already a member? <Link to="/o/auth/user/login" className="text-blue-800">Click here</Link></p>
          <ButtonHandle
            type="submit"
            text="Create an Account"
            className="submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
