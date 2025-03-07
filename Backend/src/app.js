import 'dotenv/config'
import express from "express"
import dataConnection from './DB/config.js'
import AllRoutes from './Routes/index.js'
const myApp = express()
const port = process.env.PORT
dataConnection()
myApp.use(express.json())
myApp.use(AllRoutes)
myApp.listen(port,()=> {
    console.log(`Server is running fine at port ${port}`)
})