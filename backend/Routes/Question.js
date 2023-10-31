var express=require('express')
var controller=require('../Controller/Question')
const jwtuser = require('../Middleware/jwtuser')

var questionroutes = express.Router()

questionroutes.post('/ask',jwtuser,controller.askquestion)
questionroutes.get('/fetchquestion',controller.questionlist)


module.exports=questionroutes