import React from 'react';
import SideBar from '../Components/DashBoard/SideBar';
import Header from '../Components/DashBoard/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header - Fixed at Top */}
      <Header />

      {/* Main Content with Sidebar & Page Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed Width, Full Height */}
        <SideBar />

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-auto p-4 bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
