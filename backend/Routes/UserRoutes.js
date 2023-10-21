var express=require('express')
var userroutes=express.Router()
var controller=require('../Controller/user')

userroutes.post('/register',controller.register)
userroutes.post('/login',controller.login)

module.exports=userroutes