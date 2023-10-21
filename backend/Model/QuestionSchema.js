const mongoose=require('mongoose')

const QuestionSchema = new mongoose.Schema({
    questionTitle:{type:String, required:"question must have a title"},
    questionBody:{type:String, required:"question must have a body"},
    questionTag:{type:[String], required:"question must have a tag"},
    noOfAnswers:{type:Number, default:0},
    upVote:{type:[String], default:[]},
    downVote:{type:[String], default:[]},
    userPosted:{type:String,required:"Question must have an author"},
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