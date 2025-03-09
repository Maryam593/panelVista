import express from "express";
import { upload } from "../middleware/uploadMiddleware.js";
import userProfileController from "../Controller/userProfile.js";

const router = express.Router();

router.post("/createProfile", upload.single("profileImage"), userProfileController.createOrUpdateProfile);

export default router;
