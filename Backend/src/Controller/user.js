import UserAuthModel from "../Model/userModel.js";
import userProfileModel from "../Model/UserProfileModel.js";

const userController = {
    getAll: async (req, res) => {
        try {
            const data = await UserAuthModel.find();
            if (!data || data.length === 0) {
                return res.status(404).json({ Warning: "No users found" });
            }
            res.status(200).json({ Success: "Data Found Successfully", data });
        } catch (error) {
            res.status(500).json({ Error: "Internal server error" });
        }
    },

    getUserProfile: async (req, res) => {
        try {
            const { id } = req.params;
            const userProfile = await userProfileModel.findById(id);
            if (!userProfile) {
                return res.status(404).json({ Warning: `Data for ID ${id} not found` });
            }
            res.status(200).json({ Success: "User Profile found!", data: userProfile });
        } catch (error) {
            console.error(error)
            res.status(500).json({ Error: "Internal server error" });
        }
    },
   
    deleteProfile: async (req, res) => {
        try {
            const { id } = req.params;
            const deActivateProfile = await UserAuthModel.findByIdAndDelete(id);

            if (!deActivateProfile) {
                return res.status(404).json({ Warning: "Cannot delete at the moment! Please try again" });
            }

            res.status(200).json({ Success: "Deactivated Successfully", data: deActivateProfile });
        } catch (error) {
            res.status(500).json({ Error: "Internal server error" });
        }
    },
    updateUserInfo: async (req, res) => {
        try {
            const { id } = req.params; 
            const { firstName, lastName, email } = req.body; 
    
            const existingUser = await UserAuthModel.findById(id);
            if (!existingUser) {
                return res.status(404).json({ Warning: "User not found!" });
            }
    
            if (firstName) existingUser.FullName.firstName = firstName;
            if (lastName) existingUser.FullName.lastName = lastName;
            if (email) existingUser.email = email;
   
            await existingUser.save();
    
            res.status(200).json({ Success: "Updated Successfully", data: existingUser });
        } catch (error) {
            res.status(500).json({ Error: "Internal server error" });
        }
    }
    
};

export default userController;
