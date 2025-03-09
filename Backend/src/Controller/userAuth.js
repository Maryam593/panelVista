 import BlackListTokenModel from "../Model/BlackListToken.js";
import UserAuthModel from "../Model/userModel.js";
import bcrypt from "bcrypt"
 const userAuthController = {
    registerUser: async (req, res) => {
        try {
            const { FullName: { firstName, lastName }, email, password } = req.body;

            if (!firstName || !email || !password) {
                return res.status(403).json({ Warning: "Fill out the requirements first" });
            }
            const hashPass = await UserAuthModel.hashpassword(password)
            const userProfile = new UserAuthModel({
                FullName: { firstName, lastName },
                email,
                password:hashPass
            });

            await userProfile.save();
            const token = await userProfile.generateJWT()
            res.status(201).json({ Success: "User Profile created successfully", data: userProfile,token });
        } catch (error) {
            console.log(error)
            res.status(500).json({ Error: "Internal server error" });
        }
    },
    Login: async(req,res)=> {
        try {
            const {email,password} = req.body
        if(!email || !password){
            return res.status(403).json({Warning:"Invalid credentials"})
        }
        const user = await UserAuthModel.findOne({email}).select("+password")
        const comparePass = user.comparePassword(password)
        if(!comparePass){
            return res.status(404).json({Warning:"Invalid credentials"})
        }
        const token = user.generateJWT();
        res.cookie("token", token)
        res.status(200).json({Success:"Login Successfully", data: user,token})
        } catch (error) {
            console.log(error)
            res.status(500).json({ Error: "Internal server error" });
        }
          
    },
    ChangePassword : async (req, res) => {
        try {
          const { password } = req.body;
          const userId = req.user.id; // Assuming authentication middleware
      
          if (!password) {
            return res.status(400).json({ error: "Password is required" });
          }
      
          // Hash the new password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
      
          // Update user password in DB
          const updatedUser = await UserAuthModel.findByIdAndUpdate(
            userId,
            { password: hashedPassword },
            { new: true }
          );
      
          if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
          }
      
          res.json({ success: "Password updated successfully" });
        } catch (error) {
          console.error("Change password error:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      },
    Logout: async (req, res, next) => {
        try {
          res.clearCookie('token'); 
          const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
          if (!token) {
            return res.status(400).json({ message: "Token missing" });
          }
       
          await BlackListTokenModel.create({ token }); 
          return res.status(200).json({ Success: "Logout successfully" });
        } catch (error) {
          console.error("Error logging out:", error);
          return res.status(500).json({ Error: "Internal server error" }); // Handle errors
        }
 }
}

 export default userAuthController