var express=require('express')
var controller=require('../Controller/Answer')
const jwtuser = require('../Middleware/jwtuser')

var answerroutes = express.Router()

answerroutes.patch('/postanswer/:id',jwtuser,controller.postAnswer)
answerroutes.patch('/deleteanswer/:id',controller.deleteAnswer)


module.exports=answerroutes