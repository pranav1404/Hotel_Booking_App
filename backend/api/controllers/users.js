// Require User Schema
const User = require('../models/User');

// Update User Controller
module.exports.updateUser = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new : true});    
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);    
    }
}

// Delete User Controller
module.exports.deleteUser = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        await User.findByIdAndDelete(req.params.id);    
        res.status(200).json("User is has been deleted");
    } catch (error) {
        next(error);
    }
}

// Get User By Id Controller
module.exports.getUserById = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const user  = await User.findById(req.params.id);    
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

// Get All Users Controller
module.exports.getAllUsers = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.id);
    try {
        const allUsers  = await User.find();    
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
}