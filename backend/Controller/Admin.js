
var UserSchema=require('../Model/UserSchema')
var jwt=require('jsonwebtoken')
var bcrypt=require('bcrypt')

module.exports={
    blockuser:async (req,res)=>{
        const {id}=req.params
        const {type}=req.body
        try {
            const user = await UserSchema.findById(id);
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
    },
    adminGetuserById:async (req,res)=>{
      const {userId}=req.params
      const user=UserSchema.findById(userId)
      if(!user){
        res.json('User not found')
      }
      else{
        res.json({
          data:user
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
}