import mongoose from "mongoose"
const dataConnection = () => {
    mongoose.connect(process.env.CONNECTION).then(()=> {
        console.log("DB is connected")
    }).catch((error)=> {console.log("Error", error)})
}
export default dataConnection