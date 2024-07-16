import Repository from "./repository.js";


export default class Controller{
    constructor(){
        this.repository=new Repository();
    }

    async addUser(req,res){
        const {name,email,password}=req.body
        await this.repository.addUser(name,email,password)
    }

    async findUser(req,res){
        const {email,password}=req.body;
       const result= await this.repository.findUser(email,password);
       if(!result)
       {
        res.json("failed")
       }
       else{
        res.json("success")
       }
       
    }
}