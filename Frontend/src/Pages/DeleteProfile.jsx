import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DeleteProfile = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogout = async (userId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.delete(`http://localhost:3000/user/deactivate/account/${userId}`);
            if (response.status === 200) {
                navigate('/o/Auth/user/sign-up');
            }
        } catch (error) {
            console.error("Error deleting account:", error);
            setError("Failed to delete account. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-md">
                <h1 className="text-2xl font-semibold mb-6">Delete Your Profile</h1>
                <p className="text-gray-600 mb-4">
                    Are you sure you want to delete your profile? This action cannot be undone.
                </p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex space-x-4">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleLogout(user?._id)}
                        disabled={loading}
                    >
                        Delete
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={() => navigate(-1)}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteProfile;