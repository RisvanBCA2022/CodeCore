const QuestionSchema=require('../Model/QuestionSchema') 
var jwt=require('jsonwebtoken')
const mongoose=require('mongoose')

module.exports={
    postAnswer: async(req,res)=>{
        const {id} = req.params;
        var _id=id
        const {noOfAnswers,answerBody,userAnswered} = req.body

        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send("question unavailabe")
        }
        // updateNoOfQuestions(_id,noOfAnswers)
        try {

            const questionupdate= await QuestionSchema.findByIdAndUpdate(_id, {$addToSet:{answer:{answerBody,userAnswered,noOfAnswers}}})
            console.log(questionupdate);
            res.status(200).json(questionupdate)
            
        } catch (error) {
            res.status(400).json(error)
        }

    }
}

// const updateNoOfQuestions = async (_id,noOfAnswers)=>{
//     try {
//         await QuestionSchema.findByIdAndUpdate(_id,{$set:{'noOfAnswers':noOfAnswers}})
//     } catch (error) {
        
//     }
// }