import mongoose from "mongoose";

// ys0504146
// NqkakLdLN0FfFVRd


export const connectToDB = async()=> {
    try{
        console.log("mongo db trying to connect")

        let connect = await mongoose.connect(process.env.DB_URI ||
            "mongodb+srv://ys0504146:NqkakLdLN0FfFVRd@targil1.ybf1am2.mongodb.net/")

        console.log("mongo db connected")
    }
    catch(err){
        console.log(err);
        console.log("cannot connect to db");
        process.exit(1)
    }
}



