var express=require('express')
var controller=require('../Controller/Answer')
const jwtuser = require('../Middleware/jwtuser')
const tryCatchMiddleware=require('../Middleware/tryCatchMiddleware')

var answerroutes = express.Router()

answerroutes.post('/postanswer/:id',jwtuser,tryCatchMiddleware(controller.postAnswer))
answerroutes.get('/fetchanswers',tryCatchMiddleware(controller.fetchanswers))
answerroutes.patch('/deleteanswer/:id',tryCatchMiddleware(controller.deleteAnswer))


module.exports=answerroutes