const mongoose = require("mongoose");
mongoose.pluralize(null)
const usersSchema = new mongoose.Schema({
    name:{
         type: String,
      required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["customer", "admin"],
        default:"customer"
    }

},
{timestamps:true}
);

const usersModel = mongoose.model("Users", usersSchema);
module.exports = usersModel;