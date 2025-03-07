import 'dotenv/config'
import express from "express"
const myApp = express()
const port = process.env.PORT
myApp.listen(port,()=> {
    console.log(`Server is running fine at port ${port}`)
})