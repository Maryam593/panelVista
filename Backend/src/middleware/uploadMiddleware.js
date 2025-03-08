// import 'dotenv/config'
// import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import multer from "multer";


// cloudinary.config({
//     cloud_name : process.env.CLOUD_NAME,
//     api_key : process.env.API_KEY,
//     api_secret :process.env.API_SECRET
// })

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "user_profiles",
//     allowed_formats: ["jpg", "jpeg", "png"],
//     public_id: (req, file) => file.originalname.split(".")[0]
//   }
// });

// const upload = multer({ storage })
// export { cloudinary, upload };
// import { fileURLToPath } from 'url';
// import path from 'path';
// import fs from 'fs';
// import multer from 'multer';

// // `__dirname` ko manually define karna ES Module me
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Ensure 'uploads' folder exists
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({ storage });

// export { upload };
import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    folder: "user_profiles",
    format: file.mimetype.split("/")[1],  // Automatically get file type
    public_id: file.originalname.split(".")[0]
  }),
});

const upload = multer({ storage });

export { cloudinary, upload };





