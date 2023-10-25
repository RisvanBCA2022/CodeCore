const express=require('express')
const cors=require('cors')
const { default: mongoose, connect } = require('mongoose')
const userroutes = require('./Routes/UserRoutes')
const app=express()
const questionroutes=require('./Routes/Question')
const answerroutes = require('./Routes/AnswerRoutes')
require('dotenv').config()

const PORT=process.env.PORT || 4001


app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/project')
.then(()=>console.log("connection successfull"))
.catch((err)=>{
    console.log(err);
})

app.use('/users',userroutes)
app.use('/questions',questionroutes)
app.use('/answer',answerroutes)
app.get("/api",(req,res)=>{
    res.send({names:["alex","solaman","jacob"]})
})
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})