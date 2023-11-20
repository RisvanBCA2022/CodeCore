const QuestionSchema=require('../Model/QuestionSchema') 
const userSchema=require('../Model/UserSchema')
var jwt=require('jsonwebtoken')
var bcrypt=require('bcrypt')
const UserSchema = require('../Model/UserSchema')


module.exports={
    askquestion:async (req,res)=>{
        const {questionTitle,questionBody,questionTags} = req.body
        const postQuestionsData={questionTitle,questionBody,questionTags}
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
            res.json({message:"failure",response:"Can't fetch questions"})
        }

    },
    deletequestion:async (req,res)=>{
        const {id:_id}=req.params
        const {userId}=req.body
        try {
            
            await QuestionSchema.findByIdAndDelete(_id)
           const user = await UserSchema.findByIdAndUpdate(userId,{$pull:{questions:_id}},{new:true})
           const question = await QuestionSchema.find()
            res.status(200).json({message:"successfully deleted..",questions:question})
            
        } catch (error) {
            res.status(404).json({message: error.message})
            
        }
    },
    vote:async (req,res)=>{
        const questionId=req.params.questionId
        const {userId,voteType}=req.body

        try{
            const question = await QuestionSchema.findById(questionId)
            const user = await userSchema.findById(question.userId)
            
            
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
                    user.reputation += 15;
                    await user.save();
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
        fetchquestionById:async (req,res)=>{
            const {id}=req.params
            const QuestionById=await QuestionSchema.findById(id)
            if(!QuestionById){
                res.json({
                    message:"User Not found"
                })
            }else{
                res.json({
                    message:"success",
                    data:QuestionById
                })
            }
        },
        editQuestion:async (req,res)=>{
            try {
                const { id } = req.params;
                const { questionTitle, questionBody, questionTags } = req.body;
            
                const updatedQuestion = await QuestionSchema.findByIdAndUpdate(
                  id,
                  {
                    $set: {
                      questionTitle,
                      questionBody,
                      questionTags,
                    },
                  },
                  { new: true } // Set new: true to return the updated document
                );
            
                if (!updatedQuestion) {
                  return res.status(404).json({ message: 'Question not found' });
                }
            
                res.status(200).json(updatedQuestion);
              } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error' });
              }
        },
        questionByTags: async (req,res)=>{
            const tags=req.params.tags
            // console.log(tags);
            try {
                const questionByTags= await QuestionSchema.find({questionTags:{$in:[tags]}}).exec()
                res.json(questionByTags)
                
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        },
    
}