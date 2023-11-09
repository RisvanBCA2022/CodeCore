const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilepicture:String,
    bio:String,
    reputation:{type:Number,default:0},
    questions:[{type: mongoose.Schema.Types.ObjectId,ref:'Question'}],
    answers:[],
    joinedOn:{type:Date, default:Date.now},
    updatedAt:{
        type:Date,
        default:Date.now
    },
    isBlocked: {
        type: Boolean,
        default: false,
      },
    
})

module.exports = mongoose.model("userlist",UserSchema)