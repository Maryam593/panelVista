import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/auth.slice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.warn("Token not found in localStorage");
        dispatch(logout()); // Redux state reset
        navigate("/o/auth/user/login");
        return;
      }

      const response = await axios.get("http://localhost:3000/user/logout", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        console.log("Logout successful!");
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/o/auth/user/login");
      }
    } catch (error) {
      console.error("Logout Failed:", error.response?.data || error.message);

      if (error.response?.status === 401) {
        console.warn("Token expired, clearing localStorage");
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/o/auth/user/login");
      }
    }
  };

  return (
    <div className="flex justify-between items-center shadow-md p-4 bg-gray-900">
      <div className="text-2xl font-bold text-white">PanelVista</div>

      <button
        onClick={handleLogout}
        className="p-3 rounded-lg bg-white cursor-pointer transition duration-300"
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;
