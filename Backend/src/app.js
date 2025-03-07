import 'dotenv/config'
import express from "express"
import dataConnection from './DB/config.js'
const myApp = express()
const port = process.env.PORT
dataConnection()
myApp.listen(port,()=> {
    console.log(`Server is running fine at port ${port}`)
})