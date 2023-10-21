
var UserSchema=require('../Model/UserSchema')
var jwt=require('jsonwebtoken')
var bcrypt=require('bcrypt')

module.exports={
    register: async (req,res)=>{
        const {username,email,password}=req.body

            const finduser = await UserSchema.find({email:email})
            if(finduser.length>0){
                return res.json({status:false,message:'Already registered'})
            }
            else{
                bcrypt.hash(password,10,async function(err,hash){
                    await UserSchema.create({
                        username:username,
                        email:email,
                        password:hash
                    })
                    
                }) //hashed the password from user and stored the hashed password in database
       
        res.status(200).json({
            status:"success",
            message:"successfully register",
            data:{username,email}
        })
    }},
    login:async (req,res)=>{
        const {userrname,email,password}=req.body
        const user = await UserSchema.find({email:email})
        var username = await user[0]?.username
        if(!user){
            return res.status(401).json({
                auth:false,
                message:"invalid username or password"
                
            })
        }
        else{
            const bcryp_pass= await bcrypt.compare(password,user[0].password)
            if(!bcryp_pass){
                res.json({
                    status:"failure",
                    message:"password or username is wrong"
                })
            }else{
                let rep={
                    id:user.id,
                }
                let token=jwt.sign(rep,process.env.ACCESS_TOKEN_SECRET)
                res.status(200).json({
                    status:"success",
                    data:{email,username},
                    auth:true,
                    token:token,
                })      
            }
        }
        
    },
}