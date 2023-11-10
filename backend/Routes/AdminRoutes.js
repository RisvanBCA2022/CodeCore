var express=require('express')
var adminroutes=express.Router()
var controller=require('../Controller/Admin')
const jwtuser = require('../Middleware/jwtuser')

// adminroutes.post('/register',controller.register)
// adminroutes.post('/login',controller.login)
adminroutes.put('/:id/block',controller.blockuser)



module.exports=adminroutes