var express=require('express')
var controller=require('../Controller/Question')

var questionroutes = express.Router()

questionroutes.post('/ask',controller.askquestion)

module.exports=questionroutes