import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "./InputField";

const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const fields = [
    { label: "Current Password", type: "password", name: "currentPassword", placeholder: "Enter current password" },
    { label: "New Password", type: "password", name: "newPassword", placeholder: "Enter new password" },
    { label: "Confirm New Password", type: "password", name: "confirmPassword", placeholder: "Re-enter new password" },
  ];

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await axios.put(
        "http://localhost:3000/user/change-password",
        {
          currentPassword: data.currentPassword,
          password: data.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(response.data.success);
      setTimeout(() => navigate("/user/dashboard"), 2000);
      reset();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to change password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Change Password</h2>

        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
        {message && <p className="text-green-500 mb-2 text-center">{message}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {fields.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              register={register}
              error={errors[field.name]?.message}
              placeholder={field.placeholder}
            />
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;