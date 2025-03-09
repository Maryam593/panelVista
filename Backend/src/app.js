import 'dotenv/config'
import express from "express"
import cors from "cors" // ✅ Import CORS
import dataConnection from './DB/config.js'
import AllRoutes from './Routes/index.js'
import cookieParser from "cookie-parser"

const myApp = express()
const port = process.env.PORT || 3000;

dataConnection()
myApp.use(cors({
    origin: "http://localhost:5173", 
    credentials: true 
}));

myApp.use(express.json())
myApp.use("/uploads", express.static("uploads")); 
myApp.use(cookieParser());
myApp.use(AllRoutes)

myApp.listen(port,()=> {
    console.log(`Server is running fine at port ${port}`)
})
