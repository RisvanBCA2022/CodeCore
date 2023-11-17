const QuestionSchema=require('../Model/QuestionSchema') 
var jwt=require('jsonwebtoken')
const mongoose=require('mongoose');
const AnswerSchema = require('../Model/AnswerSchema');
const UserSchema = require('../Model/UserSchema');
const tryCatchMiddleware=require('../Middleware/tryCatchMiddleware')


module.exports={
    postAnswer: async(req,res)=>{
        const {questionId,answerBody,userId,userAnswered} = req.body;
        // console.log(req.body);
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
            // console.log(savedAnswer);
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
            // console.log(answer)

            res.status(200).json(answer)
            
        } catch (error) {
            res.json(error)
        }

    },
    
    deleteAnswer: async (req,res)=>{
        const {_id}=req.params
        const {userId,Id,questionId,}=req.body
        console.log(Id,"answerid",questionId,'questionid');

        
        // console.log(req.body);
        // if (!mongoose.Types.ObjectId.isValid(_id)) {
        //     return res.status(404).send("Question unavailable...");
        //   }
        //   if (!mongoose.Types.ObjectId.isValid(userId)) {
        //     return res.status(404).send("Answer unavailable...");
        //   }
        //   updateNoOfQuestions(_id,noOfAnswers)
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
                //   console.log(`Successfully removed answer with ID ${answerId} from the question.`);
                } else {
                //   console.log(`Answer with ID ${Id} not found in the question's answers array.`);
                }
              } else {
                // console.log(`Question with ID ${questionId} not found.`);
              }

           
        //  console.log(result);
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

