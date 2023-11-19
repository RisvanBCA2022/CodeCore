const mongoose=require('mongoose')
const AnswerSchema = require('./AnswerSchema')
const userSchema=require('./UserSchema')

const QuestionSchema = new mongoose.Schema({
    questionTitle:{type:String, required:"question must have a title"},
    questionBody:{type:String},
    questionTags:Array,
    noOfAnswers:{type:Number, default:0},
    upVote:{type:[String], default:[]},
    downVote:{type:[String], default:[]},
    userPosted:{type:String},
    userId:{type: mongoose.SchemaTypes.ObjectId,ref:'userlist'},
    postedOn:{type:Date,default:Date.now},
    answer: [{type: mongoose.SchemaTypes.ObjectId,ref:'Answer'}]
})

module.exports = mongoose.model("Question",QuestionSchema)

