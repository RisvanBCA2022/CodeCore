const express=require('express')
const cors=require('cors')
const { default: mongoose, connect } = require('mongoose')
const userroutes = require('./Routes/UserRoutes')
const app=express()
require('dotenv').config()

const PORT=process.env.PORT || 4001


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/project')
.then(()=>console.log("connection successfull"))
.catch((err)=>{
    console.log(err);
})

app.use(userroutes)
app.get("/api",(req,res)=>{
    res.send({names:["alex","solaman","jacob"]})
})
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})