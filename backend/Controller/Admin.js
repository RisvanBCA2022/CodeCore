
var UserSchema=require('../Model/UserSchema')
var jwt=require('jsonwebtoken')
var bcrypt=require('bcrypt')

module.exports={
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