const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},
{
    timestamps:true,
    UpdatedAt:true,
    createdAt:true
});
UserModel = mongoose.model("users",UserSchema);
module.exports = UserModel;