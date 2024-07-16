import mongoose from "mongoose";

export const connectToMongoDB=()=>{
mongoose.connect("mongodb://localhost:27017/testLogin")
.then(()=>{console.log("mongoDB connected..")})
.catch(e=>console.log(e))
}

