var express=require('express')
var userroutes=express.Router()
var controller=require('../Controller/user')
const jwtuser = require('../Middleware/jwtuser')

userroutes.post('/register',controller.register)
userroutes.post('/login',controller.login)
userroutes.get('/fetchuser',jwtuser,controller.profile)
userroutes.get('/fetchallusers',controller.fetchAllusers)
userroutes.get('/fetchuser/:id',controller.fetchuserById)

module.exports=userroutes