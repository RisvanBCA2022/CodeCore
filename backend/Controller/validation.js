const joi=require('joi')


const authschema = joi.object({
    username:joi.string(),
    email:joi.string().email().lowercase().required(),
    password:joi.string().required()
})

module.exports={authschema}