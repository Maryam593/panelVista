import React, { useEffect, useState } from "react";
import axios from "axios";
import { User, Clock, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const [profile, setProfile] = useState(null);
    const profileId = useSelector((state) => state.profile.profileId);
    const user = useSelector((state) => state.auth.user)
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/userProfile/${profileId}`);
                setProfile(response.data.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        if (profileId) {
            fetchProfile();
        }
    }, [profileId]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Welcome Back, 👋 {user?.FullName?.firstName}</h1>

            {/* Profile & Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Profile Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    {profile ? (
                        <>
                            <img
                                src={profile.profileImage}
                                alt="Profile"
                                className="w-20 h-20 rounded-full mb-3 object-cover"
                            />
                            <h2 className="text-lg font-semibold">{profile.introduction}</h2>
                            <p className="text-gray-500 text-sm">{profile.education}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
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
        </div>
    );
};

export default Dashboard;