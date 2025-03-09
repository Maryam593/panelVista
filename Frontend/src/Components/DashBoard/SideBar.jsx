import React from "react";
import { Home, User, KeyIcon, Trash2Icon } from "lucide-react";
import { Link,  } from "react-router-dom";


const SideBar = () => {
 
  

  const menuItems = [
    { name: "Home", icon: Home, path: "/user/dashboard" },
    { name: "Profile", icon: User, path: "/user/profile" },
    {name : "Change Password", icon : KeyIcon, path : "/user/change-password"},
    {name : 'DeActivate Account', icon : Trash2Icon, path : "/user/delete/profile"}
  ];

  return (
    <div className="bg-gray-900 text-white h-screen p-4 shadow-lg flex flex-col 
      w-16 md:w-60 transition-all duration-300 items-center md:items-start">
      
      <ul className="space-y-4 flex flex-col items-center md:items-start w-full">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <li key={name} className="w-full">
            <Link 
              to={path} 
              className="flex items-center justify-center md:justify-start p-3 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-300 w-full"
            >
              <Icon size={24} className="shrink-0" /> 
              <span className="ml-3 hidden md:block">{name}</span>  
            </Link>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default SideBar;
