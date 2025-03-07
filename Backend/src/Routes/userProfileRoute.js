import Router from "express"
import userProfileController from "../Controller/userProfile.js"
const profileRouter = Router()

profileRouter.post("/user/profile", userProfileController.createProfile)

export default profileRouter