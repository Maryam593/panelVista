import userProfileModel from "../Model/UserProfileModel.js";

const userProfileController = {
    createProfile: async (req, res) => {
        try {
            // console.log("Middleware Req Body:", req.body);
            // console.log("Middleware File:", req.file);
            // console.log("Cloudinary URL:", req.file ? req.file.path : "Not Uploaded!");

            const { userId, introduction, education, socialLinks } = req.body;
            const profileImage = req.file ? req.file.path : null; 
            if (!profileImage) {
                return res.status(400).json({ Error: "Image upload failed!" });
            }
            const existingProfile = await userProfileModel.findOne({ userId });
            if (existingProfile) {
                return res.status(400).json({ Warning: "Profile already exists!" });
            }

            const newProfile = new userProfileModel({
                userId,
                introduction,
                profileImage,
                education,
                socialLinks
            });

            await newProfile.save();
            res.status(201).json({ Success: "Profile created successfully", data: newProfile });
        } catch (error) {
            console.error(error)
            res.status(500).json({ Error: "Internal server error" });
        }
    }
};

export default userProfileController;
