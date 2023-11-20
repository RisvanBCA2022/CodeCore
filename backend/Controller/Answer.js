const QuestionSchema=require('../Model/QuestionSchema') 
var jwt=require('jsonwebtoken')
const mongoose=require('mongoose');
const AnswerSchema = require('../Model/AnswerSchema');
const UserSchema = require('../Model/UserSchema');
const tryCatchMiddleware=require('../Middleware/tryCatchMiddleware')


module.exports={
    postAnswer: async(req,res)=>{
        const {questionId,answerBody,userId,userAnswered} = req.body;
        const {id}=req.params

        var _id=id
       
        try {
            const answer = new AnswerSchema({
                questionId:_id,
                answerBody:answerBody,
                userAnswered:userAnswered,
                userId:userId
            })

            const savedAnswer = await answer.save()
            const answerId=savedAnswer._id
            const question = await QuestionSchema.updateOne(
                {_id},
                {$push:{answer:answerId}}
            )
            res.status(200).json(savedAnswer)
            
        } catch (error) {
            res.json(error)
        }

    },
    fetchanswers: async(req,res)=>{
        // const {questionId}=req.params
        // var _id=id
       
        try {
            const answer= await AnswerSchema.find()

            res.status(200).json(answer)
            
        } catch (error) {
            res.json(error)
        }

    },
    
    deleteAnswer: async (req,res)=>{
        const {_id}=req.params
        const {userId,Id,questionId,}=req.body
          try {
            await AnswerSchema.deleteOne({_id:Id})

            const question = await QuestionSchema.findById(
                questionId
            )
            if (question) {
                // Assuming the array in the QuestionSchema is called 'answers'
                const index = question.answer.indexOf(Id);
                if (index > -1) {
                  question.answer.splice(index, 1);
                  await question.save();
                } else {
                }
              } else {
              }

           
            res.json("successfully deleted")
          } catch (error) {
            
          }

    }
}

const updateNoOfQuestions = async (_id,noOfAnswers)=>{
    try {
        await QuestionSchema.findByIdAndUpdate(_id,{$set:{'noOfAnswers':noOfAnswers}})
    } catch (error) {
        
    }
}

