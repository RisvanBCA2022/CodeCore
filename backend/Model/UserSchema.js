const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    profilepicture:String,
    bio:String,
    reputation:Number,
    joinedOn:{type:Date, default:Date.now},
})

module.exports = mongoose.model("userlist",UserSchema)