import { Router } from "express";
import userController from "../Controller/user.js";
import userAuthController from "../Controller/userAuth.js";
import userAuthMiddleware from "../middleware/userAuthMiddleware.js";
const userRouter = Router()

userRouter.get("/AllUsers", userController.getAll)
userRouter.get("/userProfile/:id", userController.getUserProfile)
userRouter.delete("/user/deactivate/account/:id", userController.deleteProfile)

//user Authorization and Authentication
userRouter.post("/user/sign-up", userAuthController.registerUser)
userRouter.post("/user/login", userAuthController.Login)
userRouter.get("/user/logout",userAuthMiddleware, userAuthController.Logout)

export default userRouter
