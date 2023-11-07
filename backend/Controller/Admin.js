
var UserSchema=require('../Model/UserSchema')
var jwt=require('jsonwebtoken')
var bcrypt=require('bcrypt')

module.exports={
    login:async (req,res)=>{
        const {email,password}=req.body
        const user = await UserSchema.find({email:email})
        var username = user[0]?.username
        if(user.length==0){
            return res.json({
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
                    id:user[0]._id,
                }
                let token=jwt.sign(rep,process.env.ACCESS_TOKEN_SECRET)
                ID=user[0]._id
                res.status(200).json({
                    status:"success",
                    data:{email,username,ID},
                    auth:true,
                    token:token,
                })      
            }
        }
        
    },
}