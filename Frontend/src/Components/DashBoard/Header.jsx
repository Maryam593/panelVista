import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center  shadow-md p-4 bg-gray-900">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">PanelVista</div>

      {/* User Avatar */}
      <div className="flex items-center gap-3">
        <span className="text-white font-medium hidden sm:block">John Doe</span>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-800 font-bold">
          JD
        </div>
      </div>
    </div>
  );
};

export default Header;
