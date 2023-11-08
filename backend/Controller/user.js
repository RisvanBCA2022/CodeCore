
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
        const {email,password}=req.body
        const user = await UserSchema.find({email:email})
        var username = user[0]?.username
        if(user.length>0){
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
        else if(email=="admin@gmail.com" && password=='admin'){
            const token = jwt.sign("admin",'secretkeyfhaofha');
            res.json({
              status: "success",
              message: "admin",
              jwt_token: token,
            });
          }

        else{
            return res.json({
                auth:false,
                message:"invalid username or password"
                
            })
        }
        
    },
    profile:async (req,res)=>{
        const userprofile = await UserSchema.findById(res.token.id)
        if(userprofile){
            res.status(200).json({
                message:"success",
                data:userprofile
            })
        }else{
            res.json({
                data:userprofile
            })
        }
        },
    fetchAllusers:async (req,res)=>{
        const allusers = await UserSchema.find()
        if(allusers){
            res.status(200).json({
                message:"success",
                data:allusers
            })
        }else{
            res.json("No user found")
        }
    }
}

