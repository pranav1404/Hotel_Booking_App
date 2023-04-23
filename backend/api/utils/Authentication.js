const jwt = require('jsonwebtoken');
const createError = require('./error');

module.exports.verifyToken = (req, res, next) => {
    const token = req.header("access_token");
    if(!token){
        return next(createError(401, "You are not Token Authenticated"));
    } 

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err){
            return next(createError(403, "Token is Not Valid"));
        }
        req.user = user;
    });
}

module.exports.verifyUser = (req, res, next) => {
    this.verifyToken(req, res, next);
    if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    }
    else{
        return next(createError(403, "Your are Not User Authorized"));
    }    
}

module.exports.verifyAdmin = (req, res, next) => {
    this.verifyToken(req, res, next);
    if(req.user.isAdmin){
        next();
    }
    else{
        return next(createError(403, "Your are Not Admin Authorized"));
    }
}
