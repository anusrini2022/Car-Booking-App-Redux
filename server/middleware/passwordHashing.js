const bcryptjs=require("bcryptjs");

const convertPassword=async(password)=>{
let salt=await bcryptjs.genSalt(10);
console.log(salt)
const hashPassword=await bcryptjs.hash(password,salt);
return hashPassword;
}

const comparePassword=async(password,hashedPassword)=>{
     return await bcryptjs.compare(password,hashedPassword)
}
module.exports={convertPassword,comparePassword}