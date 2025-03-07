import UserProfileModel from "../Model/UserProfileModel.js";

const userProfileController = {
    createProfile: async (req, res) => {
        try {
            const { userId, introduction,profileImage,education, socialLinks } = req.body;

            const existingProfile = await UserProfileModel.findOne({ userId });
            if (existingProfile) {
                return res.status(400).json({ Warning: "Profile already exists!" });
            }

            const newProfile = new UserProfileModel({
                userId,
                introduction,
                profileImage,
                education,
                socialLinks
            });

            await newProfile.save();
            res.status(201).json({ Success: "Profile created successfully", data: newProfile });
        } catch (error) {
            res.status(500).json({ Error: "Internal server error" });
        }
    }
}
export default userProfileController;
