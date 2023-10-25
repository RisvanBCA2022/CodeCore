var express=require('express')
var controller=require('../Controller/Answer')
const jwtuser = require('../Middleware/jwtuser')

var answerroutes = express.Router()

answerroutes.patch('/postanswer/:id',controller.postAnswer)


module.exports=answerroutes