import { Router } from "express";
import userController from "../Controller/user.js";
const userRouter = Router()

userRouter.get("/AllUsers", userController.getAll)
userRouter.get("/userProfile/:id", userController.getUserProfile)
userRouter.post("/user/profile", userController.registerUser)
userRouter.delete("/user/deactivate/account/:id", userController.deleteProfile)

export default userRouter
