const mongoose=require('mongoose')

const AnswerSchema = new mongoose.Schema({
    questionId:{type:String},
    answerBody:{type:String},
    userAnswered:{type:String},
    userId:{type: mongoose.SchemaTypes.ObjectId,ref:'Question'},
    answeredOn:{type:Date,default:Date.now}
})

module.exports = mongoose.model('Answer',AnswerSchema)