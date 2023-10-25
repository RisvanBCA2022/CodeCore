const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilepicture:String,
    bio:String,
    reputation:{type:Number,default:0},
    questions:[],
    answers:[],
    joinedOn:{type:Date, default:Date.now},
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("userlist",UserSchema)