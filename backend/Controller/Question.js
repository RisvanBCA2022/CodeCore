const QuestionSchema=require('../Model/QuestionSchema') 
var jwt=require('jsonwebtoken')
var bcrypt=require('bcrypt')


module.exports={
    askquestion:async (req,res)=>{
        const {questionTitle,questionBody,questionTags,userPosted} = req.body
        // const {authorization}=req.headers
        // console.log(req.body);

        const postQuestionsData={questionTitle,questionBody,questionTags,userPosted}
        const postQuestion = new QuestionSchema({...postQuestionsData,userId:res.token.id})
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
            res.status(200).json( questions)
        }else{
            res.json("Can't fetch questions")
        }

    },
    deletequestion:async (req,res)=>{
        const {id:_id}=req.params
        console.log(req.params);
        try {
            await QuestionSchema.findByIdAndDelete(_id)
           const question = await QuestionSchema.find()
            res.status(200).json({message:"successfully deleted..",questions:question})
            
        } catch (error) {
            res.status(404).json({message: error.message})
            
        }
    }
    
}