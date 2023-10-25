const QuestionSchema=require('../Model/QuestionSchema') 
var jwt=require('jsonwebtoken')
var bcrypt=require('bcrypt')


module.exports={
    askquestion:async (req,res)=>{
        const {questionTitle,questionBody,questionTags} = req.body
        const postQuestionsData={questionTitle,questionBody,questionTags}
        const postQuestion = new QuestionSchema({...postQuestionsData,userId:req.userId})
        try {

            await postQuestion.save();
            res.status(200).json("Posted a question successfully")
            
        } catch (error) {
            console.log(error)
            res.status(409).json("couldn't post question")
            
        }
    },
    questionlist:async (req,res)=>{
        const questions = await QuestionSchema.find()
        if(questions.length !=0){
            res.status(200).json(await questions)
        }else{
            res.json("Can't fetch questions")
        }

    }
    
}