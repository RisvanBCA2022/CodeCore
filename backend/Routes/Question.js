var express=require('express')
var controller=require('../Controller/Question')
const jwtuser = require('../Middleware/jwtuser')
const tryCatchMiddleware=require('../Middleware/tryCatchMiddleware')

var questionroutes = express.Router()

questionroutes.post('/ask',jwtuser,tryCatchMiddleware(controller.askquestion))
questionroutes.get('/fetchquestion',tryCatchMiddleware(controller.questionlist))
questionroutes.patch('/delete/:id',jwtuser,tryCatchMiddleware(controller.deletequestion))
questionroutes.patch('/:questionId/vote',tryCatchMiddleware(controller.vote))
// questionroutes.patch('/:questionId/downvote',controller.downVote)
questionroutes.get('/:id/questionbyid',tryCatchMiddleware(controller.fetchquestionById))
questionroutes.patch('/:id/editquestion',tryCatchMiddleware(controller.editQuestion))
questionroutes.get('/questionbytag/:tags',tryCatchMiddleware(controller.questionByTags))


module.exports=questionroutes