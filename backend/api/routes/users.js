// Require Libraries
const express = require('express');
const router = express.Router();
const authenticationController = require('../utils/Authentication');
// Require User Controller
const userController = require('../controllers/users');

// Check Authentication
// router.get("/checkAuthentication", authenticationController.verifyToken, (req, res, next) => {
//     res.send('Hello User you are Authenticated');
// } );

// router.get("/checkUser/:id", authenticationController.verifyUser, (req, res, next) => {
//     res.send('Hello User you are Logged in and you can delete your account');
// } );

// router.get("/checkAdmin/:id", authenticationController.verifyAdmin, (req, res, next) => {
//     res.send('Hello User you are Logged in and you can delete all accounts');
// } );

// UPDATE
router.put("/:id", authenticationController.verifyUser, userController.updateUser);

// DELETE
router.delete("/:id", authenticationController.verifyUser, userController.deleteUser);

// GET
router.get("/:id", authenticationController.verifyUser, userController.getUserById);

// GET ALL
router.get("/", authenticationController.verifyAdmin, userController.getAllUsers);

// Export Users router
module.exports = router;