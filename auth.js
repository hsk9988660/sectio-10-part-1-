require('dotenv').config();
const jWt=require("jsonwebtoken");
function auth(req,res,next){
  const token=req.header('x-auth-jwt');

  if (!token) {
      res.status(401).send("access denied . No token provided ")
  }try {
    const decode=jWt.verify(token,process.env.SECRET_KEY)
    req.user=decode  
    next()
  // we aither terminate req, res or pass to next function
  } catch (error) {
    res.status(400).send(" invalid token")
  }

//if we want particular users to access our data we use this middleware function in route handlers


// if it valid it return payload 


}
module.exports=auth

// we donot use it in every module only some end points of api's should be protected

//we apply this middleware function to certain endpopints 