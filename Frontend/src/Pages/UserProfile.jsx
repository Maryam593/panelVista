import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProfileId } from "../store/slice/profile.slice";

const CreateProfile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  console.log(userId)
  const [formData, setFormData] = useState({
    introduction: "",
    education: "",
    instagram: "",
    facebook: "",
    gitHub: "",
    Reddit: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!userId) {
      setMessage("User ID is missing. Please log in again.");
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("userId", userId);
    formDataToSend.append("introduction", formData.introduction);
    formDataToSend.append("education", formData.education);
    formDataToSend.append(
      "socialLinks",
      JSON.stringify({
        instagram: formData.instagram,
        facebook: formData.facebook,
        gitHub: formData.gitHub,
        Reddit: formData.Reddit,
      })
    );

    if (profileImage) {
      formDataToSend.append("profileImage", profileImage);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/createProfile",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      dispatch(setProfileId(response.data.data._id));

      setMessage("Profile Created Successfully!");
      setFormData({
        introduction: "",
        education: "",
        instagram: "",
        facebook: "",
        gitHub: "",
        Reddit: "",
      });
      setProfileImage(null);
    } catch (error) {
      setMessage("Profile creation failed. Try again.");
      console.error("Error creating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Create Profile</h2>

      {message && <p className="mb-4 text-center text-red-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="introduction"
          placeholder="Introduction"
          value={formData.introduction}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="instagram"
          placeholder="Instagram Link"
          value={formData.instagram}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="facebook"
          placeholder="Facebook Link"
          value={formData.facebook}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="gitHub"
          placeholder="GitHub Link"
          value={formData.gitHub}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="Reddit"
          placeholder="Reddit Link"
          value={formData.Reddit}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
          accept="image/*"
        />

        <button
          type="submit"
          className=" p-2 bg-gray-900 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Creating Profile..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
