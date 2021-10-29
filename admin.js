function admin(req,res,next){
//401 for unauthorize user

//401 means user send valid token and he is still not allowed we give 403 
// 403 forbidden request it means never try to access
if (!req.user.isAdmin) {
    res.status(403).send(" access denied")
}
next()


}

exports.admin=admin