var express=require('express')
var controller=require('../Controller/Question')
const jwtuser = require('../Middleware/jwtuser')

var questionroutes = express.Router()

questionroutes.post('/ask',jwtuser,controller.askquestion)
questionroutes.get('/fetchquestion',controller.questionlist)
questionroutes.delete('/delete/:id',jwtuser,controller.deletequestion)
questionroutes.patch('/:questionId/vote',controller.vote)
// questionroutes.patch('/:questionId/downvote',controller.downVote)


module.exports=questionroutes