import mongoose from "mongoose";
import userProfileModel from "../Model/UserProfileModel.js";

const userProfileController = {
    createOrUpdateProfile: async (req, res) => {
        try {
            const { userId, introduction, education } = req.body;
            let socialLinks = req.body.socialLinks; // Get socialLinks as string
            const profileImage = req.file ? req.file.path : null;

            if (!userId) {
                return res.status(400).json({ Warning: "User ID is required" });
            }

            if (!mongoose.Types.ObjectId.isValid(userId)) {
                return res.status(400).json({ Error: "Invalid User ID format" });
            }

            let existingProfile = await userProfileModel.findOne({ userId });

            if (existingProfile) {
                // Update Profile
                existingProfile.introduction = introduction || existingProfile.introduction;
                existingProfile.education = education || existingProfile.education;

                if (socialLinks) {
                    try {
                        socialLinks = JSON.parse(socialLinks); // Parse socialLinks
                        existingProfile.socialLinks = socialLinks;
                    } catch (parseError) {
                        return res.status(400).json({ Error: "Invalid socialLinks JSON" });
                    }
                }

                if (profileImage) existingProfile.profileImage = profileImage;

                await existingProfile.save();
                return res.status(200).json({ Success: "Profile updated successfully", data: existingProfile });
            } else {
                // Create New Profile
                let parsedSocialLinks = {};
                if(socialLinks){
                    try{
                        parsedSocialLinks = JSON.parse(socialLinks);
                    }catch(parseError){
                        return res.status(400).json({Error: "Invalid socialLinks JSON"});
                    }
                }
                const newProfile = new userProfileModel({
                    userId,
                    introduction,
                    profileImage,
                    education,
                    socialLinks: parsedSocialLinks, // Use parsed socialLinks
                });

                await newProfile.save();
                return res.status(201).json({ Success: "Profile created successfully", data: newProfile });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ Error: "Internal server error" });
        }
    },
};

export default userProfileController;