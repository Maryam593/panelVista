import React, { useEffect,useRef } from "react";
import { useForm } from "react-hook-form";
import { signupSchema } from "./SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import InputField from "../../Components/InputField";
import ButtonHandle from "../../Components/ButtonHandle";

const SignUp = () => {
    const formRef = useRef(null);

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

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };


  const fields = [
    { label: "First Name", name: "FullName.firstName", type: "text", placeholder: "John" },
    { label: "Last Name", name: "FullName.lastName", type: "text", placeholder: "Doe" },
    { label: "Email", name: "email", type: "email", placeholder: "abc@gmail.com" },
    { label: "Secret Key", name: "password", type: "password", placeholder: "secretKey" },
  ];

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 signup-container" ref={formRef}>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map(({ label, name, type, placeholder }) => (
            <InputField
              key={name}
              label={label}
              name={name}
              type={type}
              placeholder={placeholder}
              register={register}
              error={isSubmitted && errors?.[name.split(".")[0]]?.[name.split(".")[1]]}
              className="input-field"
            />
          ))}
          <ButtonHandle type="submit" text="Create an Account" className="submit-btn" />
        </form>
      </div>
    </div>
  );

}

export default SignUp;
