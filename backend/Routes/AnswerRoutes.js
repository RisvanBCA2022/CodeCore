var express=require('express')
var controller=require('../Controller/Answer')
const jwtuser = require('../Middleware/jwtuser')

var answerroutes = express.Router()

answerroutes.post('/postanswer/:id',jwtuser,controller.postAnswer)
answerroutes.get('/fetchanswers',jwtuser,controller.fetchanswers)
answerroutes.patch('/deleteanswer/:id',controller.deleteAnswer)


module.exports=answerroutes