const QuestionSchema=require('../Model/QuestionSchema') 
var jwt=require('jsonwebtoken')
const mongoose=require('mongoose')

module.exports={
    postAnswer: async(req,res)=>{
        const {id,noOfAnswers,answerBody,userId,userAnswered} = req.body;

        var _id=id
        // const {noOfAnswers,answerBody,userAnswered} = req.body
        
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.send("question unavailabe")
        }
        updateNoOfQuestions(_id,noOfAnswers)
        try {

            const questionupdate= await QuestionSchema.findByIdAndUpdate(_id, {$addToSet:{answer:[{answerBody,userId,userAnswered}]}})
            // console.log(questionupdate);
            res.status(200).json(questionupdate)
            
        } catch (error) {
            res.json(error)
        }

    },
    deleteAnswer: async (req,res)=>{
        const {id:_id}=req.params
        const {userId,noOfAnswers}=req.body
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send("Question unavailable...");
          }
          if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(404).send("Answer unavailable...");
          }
          updateNoOfQuestions(_id,noOfAnswers)
          try {
            await QuestionSchema.updateOne(
                {_id},
                {$pull:{answer:{userId:userId}}}
            )
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

