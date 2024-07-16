import express from "express"
import Controller from "./controller.js";

const router=express.Router();

const controller=new Controller();

router.post("/signup",(req,res)=>{controller.addUser(req,res)});
router.post("/signin",(req,res)=>{controller.findUser(req,res)});





export default router;