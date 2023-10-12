var express=require('express')
var userroutes=express.Router()
var controller=require('../Controller/user')

userroutes.post('/users/register',controller.register)
userroutes.post('/users/login',controller.login)

module.exports=userroutes