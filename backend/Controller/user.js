
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
            const blocked =user[0]?.isBlocked
           
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
                    data:{email,username,ID,blocked},
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
              data:{blocked:false}
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
    },
    fetchuserById:async (req,res)=>{
        const {id}=req.params
        const user = await UserSchema.findById(id)
        if(user){
            res.status(200).json({
                message:"success",
                data:user
            })
        }else{
            res.json("User Not Found")
        }
    },
    blockuser:async (req,res)=>{
        const {id}=req.params
        const {type}=req.body
        console.log(type);
        try {
            const user = await UserSchema.findById(id);
            console.log(user);
            if (!user) {
              return res.json({ message: 'User not found' });
            }
            if(type=='block'){
                user.isBlocked = true;
                await user.save();
                return res.status(200).json({ message: 'User blocked successfully' });
            }
            else {
                user.isBlocked = false;
                await user.save();
                return res.status(200).json({ message: 'User unblocked successfully' });
            }
          
          } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
          }
    }
}

