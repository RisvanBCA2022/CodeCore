const jwt = require('jsonwebtoken')


module.exports = (req,res,next) =>{
    try {
        let authheader = req.headers.authorization;
        if(authheader == undefined){
            res.status(401).send({error:"no tocken provider"})
        }

        let token =authheader.split(" ")[1];
        if(token){
            const verify=  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            console.log(verify);
            if(verify){
                res.token=verify
                next()
            }

        }else{
            res.status(401)
        }
      
        
    } catch (error) {
        res.status(400).send("invalid token")
        
    }
}
