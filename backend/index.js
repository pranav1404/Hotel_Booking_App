const express = require('express');
const dotenv = require('./config/dotenv');
const db = require('./config/mongoose');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const createError = require('./api/utils/error');
const cookieParser = require('cookie-parser');
const port = 8800;
const app = express();

const cors = require("cors");

app.use(cors({}));

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Express Router
app.use('/api/auth', require('./api/routes/auth'));
app.use('/api/hotels', require('./api/routes/hotels'));
app.use('/api/rooms', require('./api/routes/rooms'));
app.use('/api/users', require('./api/routes/users'));

// Error handling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went Wrong";
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    })
});

// Servers Connections
app.listen(port, (err) => {
    if(err){
        console.log("Connection Error in Server");
        return;
    }
    connect();
    console.log('Connected to Server on port:', port);
})