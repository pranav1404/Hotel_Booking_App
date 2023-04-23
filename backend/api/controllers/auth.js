const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hash,
            isAdmin : req.body.isAdmin
        });

        await newUser.save();
        res.status(200).send("User has been Created.");
    } catch (error) {
        next(error);
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({username : req.body.username});

        if(!user){  
            return next(createError(404, "User Not Found"));
            // return res.status(404).send('User Not Found');
        } 

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if(!isPasswordCorrect){
            return next(createError(404, "Wrong Password or Username!"));
            // return res.status(404).send('Wrong Password or Username');
        } 

        const token = jwt.sign({
            id : user._id,
            isAdmin : user.isAdmin
        }, process.env.JWT);


        const {password, isAdmin, ...otherDetails} = user._doc;
        return res.status(200).json({
            "access_token" : token,
            ...otherDetails
        });
    } catch (error) {
        next(error);
        // res.status(500).json(error.message);
    }
}