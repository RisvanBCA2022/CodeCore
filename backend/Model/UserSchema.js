const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    profilepicture:String,
    bio:String,
    reputation:Number,
    created_at:Date
    
})

module.exports = mongoose.model("userlist",UserSchema)