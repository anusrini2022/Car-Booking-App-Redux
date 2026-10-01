const Users=require("../model/userModel");

const createUser=async(user)=>{
 return await  Users.create(user);
}

const findUser=async(email)=>{
    return await Users.findOne({userName:email});
}
const findAllUsers=async()=>{
    return await Users.find();
}

module.exports={createUser,findUser,findAllUsers}