// Require Libraries
const express = require('express');
const router = express.Router();

// Require Authentication Controller
const authenticationController = require('../controllers/auth');

router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);

// Export Authentication router
module.exports = router;