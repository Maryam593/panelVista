import React from "react";
import { User, Clock, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Dummy Recent Activity Data
  const activities = [
    { id: 1, action: "Logged in", time: "5 mins ago" },
    { id: 2, action: "Updated Profile", time: "20 mins ago" },
    { id: 3, action: "Changed Password", time: "1 hour ago" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Welcome Back, User! 👋</h1>

      {/* Profile & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <User size={50} className="text-blue-600 mb-3" />
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-500 text-sm">johndoe@example.com</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Settings size={30} className="text-gray-700 mb-3" />
          <Link
            to="/settings"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Edit Profile
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Clock size={30} className="text-gray-700 mb-3" />
          <p className="text-lg font-semibold">Last Login:</p>
          <p className="text-gray-500">2 hours ago</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          {activities.map(({ id, action, time }) => (
            <li key={id} className="flex justify-between border-b pb-2">
              <span>{action}</span>
              <span className="text-gray-500">{time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
