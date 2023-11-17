var express=require('express')
var userroutes=express.Router()
var controller=require('../Controller/user')
const jwtuser = require('../Middleware/jwtuser')
const tryCatchMiddleware=require('../Middleware/tryCatchMiddleware')


userroutes.post('/register',tryCatchMiddleware(controller.register))
userroutes.post('/login',tryCatchMiddleware(controller.login))
userroutes.get('/fetchuser',jwtuser,tryCatchMiddleware(controller.profile))
userroutes.get('/fetchallusers',tryCatchMiddleware(controller.fetchAllusers))
userroutes.get('/fetchuser/:id',tryCatchMiddleware(controller.fetchuserById))
userroutes.post('/updateprofile/:id',jwtuser,tryCatchMiddleware(controller.editUserprofile))
userroutes.post('/userquestions',tryCatchMiddleware(controller.showuserquestions))
userroutes.post('/deleteuser',tryCatchMiddleware(controller.deleteprofile))

module.exports=userroutes