import React from "react";
import { Home, User, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Profile", icon: User },
    { name: "Logout", icon: Lock},
  ];

  return (
    <div className="bg-gray-900 text-white h-screen p-4 shadow-lg flex flex-col 
      w-16 md:w-60 transition-all duration-300 items-center md:items-start">
      
      {/* Menu Items */}
      <ul className="space-y-4 flex flex-col items-center md:items-start w-full">
        {menuItems.map(({ name, icon: Icon }) => (
          <li key={name} className="w-full">
            <Link 
              to={`/${name.toLowerCase()}`} 
              className="flex items-center justify-center md:justify-start p-3 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300 w-full"
            >
              <Icon size={24} className="shrink-0" /> 
              <span className="ml-3 hidden md:block">{name}</span>  
              {/* Text only visible on large screens */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
