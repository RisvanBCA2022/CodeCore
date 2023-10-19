const mongoose=require('mongoose')

const QuestionList = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    profilepicture:String,
    bio:String,
    reputation:Number,
    joinedOn:Date,
})

module.exports = mongoose.model("questionlist",QuestionList)