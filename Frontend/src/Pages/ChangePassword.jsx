import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { logout } from "../store/slice/auth.slice";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      await axios.put(
        "http://localhost:3000/user/change-password",
        { currentPassword, password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage("Password changed successfully. Redirecting to login...");
      dispatch(logout());
      localStorage.removeItem("authToken");
      setTimeout(() => {
        navigate("/o/Auth/user/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to change password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-500 mb-2">{message}</p>}

      {/* Password Fields */}
      {[
        { label: "Current Password", state: "current", value: currentPassword, setValue: setCurrentPassword },
        { label: "New Password", state: "new", value: newPassword, setValue: setNewPassword },
        { label: "Confirm New Password", state: "confirm", value: confirmPassword, setValue: setConfirmPassword }
      ].map(({ label, state, value, setValue }) => (
        <div key={state} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <div className="relative">
            <input
              type={showPassword[state] ? "text" : "password"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 pr-10"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword({ ...showPassword, [state]: !showPassword[state] })}
            >
              {showPassword[state] ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>
      ))}

      {/* Change Password Button */}
      <button
        onClick={handleChangePassword}
        disabled={loading}
        className="bg-gray-900 text-white font-bold py-2 px-4 rounded w-full"
      >
        {loading ? "Changing..." : "Change Password"}
      </button>
    </div>
  );
};

export default ChangePassword;
