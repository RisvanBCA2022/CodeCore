const jwt = require('jsonwebtoken')


module.exports = (req,res,next) =>{
    try {
        let authheader = req.headers.authorization;
        if(authheader == undefined){
            res.status(401).send({error:"no tocken provider"})
        }

        let token =authheader.split(" ")[1];
        console.log(ACCESS_TOKEN_SECRET);
       jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,function(err,decoded){
            if(err){
                res.status(500).send({error:"authentication failed"})
            }else{
                next();
            }
        })
        
    } catch (error) {
        res.status(400).send("invalid token")
        
    }
}
