import express from "express"
import { connectToMongoDB } from "./src/config.js";
import router from "./src/routes.js";
import cors from "cors";


const server=express();

server.use(cors());
server.use(express.json());

server.use("/",router); 
server.get("/",(req,res)=>res.send("hello i m available"))


server.listen(8080,()=>{
    console.log("server started..."),
    connectToMongoDB();
})