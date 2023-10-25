const mongoose=require('mongoose')

const QuestionSchema = new mongoose.Schema({
    questionTitle:{type:String, required:"question must have a title"},
    questionBody:{type:String},
    questionTags:Array,
    noOfAnswers:{type:Number, default:0},
    upVote:{type:[String], default:[]},
    downVote:{type:[String], default:[]},
    userPosted:{type:String,},
    userId:{type:String},
    postedOn:{type:Date,default:Date.now},
    answer: [{
        answerBody:String,
        userAnswered:String,
        userId:String,
        answeredOn:{type:Date,default:Date.now},
    }]
})

module.exports = mongoose.model("Question",QuestionSchema)

