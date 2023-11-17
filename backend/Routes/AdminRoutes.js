var express=require('express')
var adminroutes=express.Router()
var controller=require('../Controller/Admin')
const jwtuser = require('../Middleware/jwtuser')
const tryCatchMiddleware=require('../Middleware/tryCatchMiddleware')

// adminroutes.post('/register',controller.register)
// adminroutes.post('/login',controller.login)
adminroutes.put('/:id/block',tryCatchMiddleware(controller.blockuser))
adminroutes.get('/users',tryCatchMiddleware(controller.fetchAllusers))
adminroutes.get('/user/:id',tryCatchMiddleware(controller.adminGetuserById))



module.exports=adminroutes