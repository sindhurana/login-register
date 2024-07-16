import { User } from "./model.js"


export default class Repository{

async addUser(name,email,password){
   await  User.create({name,email,password});
}

async findUser(email,password){
   const result=await User.findOne({email,password});
   return result;

}

}