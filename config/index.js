const mongoose = require("mongoose");
const mongodbConnection = async()=>{
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/AirUni");
       console.log("database connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports=mongodbConnection;