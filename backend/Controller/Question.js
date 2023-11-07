const QuestionSchema=require('../Model/QuestionSchema') 
const userSchema=require('../Model/UserSchema')
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

            const newquestion=await postQuestion.save();
            const question = await QuestionSchema.findOne({questionTitle:questionTitle})

            const user = await userSchema.findByIdAndUpdate(question.userId,{$addToSet:{questions:[question._id]}})
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
        // console.log(req.params);
        try {
            await QuestionSchema.findByIdAndDelete(_id)
           const question = await QuestionSchema.find()
            res.status(200).json({message:"successfully deleted..",questions:question})
            
        } catch (error) {
            res.status(404).json({message: error.message})
            
        }
    },
    vote:async (req,res)=>{
        const questionId=req.params.questionId
        const {userId,voteType}=req.body
        // console.log(req.body);

        try{
            const question = await QuestionSchema.findById(questionId)
            if(!question){
                return res.json({message:"Question not available"})
            }

            if(voteType==='upvote'){
                if(!question.upVote.includes(userId)){
                    const index = question.downVote.indexOf(userId)
                    if(index > -1){
                        question.downVote.splice(index, 1)
                    }
                    question.upVote.push(userId)
                    await question.save()
                }
            }else if(voteType === 'downvote'){
                if(!question.downVote.includes(userId)){
                    const index = question.upVote.indexOf(userId)
                    if(index > -1){
                        question.upVote.splice(index,1)
                    }
                    question.downVote.push(userId)
                    await question.save()
                }
            }
            else{
               return res.json({message:'Invalid vote type'})
            }
            res.json(question)
        }catch(error){
            console.log(error);
            res.json({message:'Internal Server Error'})
        }

        },
        // downVote:async (req,res)=>{
        //     const questionId=req.params.questionId
        //     const {userId}=req.body
    
        //     try{
        //         const question = await QuestionSchema.findById(questionId)
        //         if(!question){
        //             return res.json({message:"Question not available"})
        //         }
    
        //         if(!question.downVote.includes(userId)){
        //             question.downVote.push(userId)
        //             await question.save()
        //         }
        //         else{
        //             question.downVote.pull(userId)
        //             await question.save()
        //         }
        //         res.json(question)
        //     }catch(error){
        //         console.log(error);
        //         res.json({message:'Internal Server Error'})
        //     }
    
        //     }
    
}