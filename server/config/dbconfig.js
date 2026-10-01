const mongoose=require("mongoose");
let URL="mongodb://localhost:27017/carbookingdb"
 
let connectDB=async()=>{
    try{
    await mongoose.connect(URL);
    console.log("connected to database")
    }catch(error)
    {
        console.log(error.message)
    }

}
//connectDB();
module.exports=connectDB;
