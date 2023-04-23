// Require the Library
const mongoose = require('mongoose');
// Connect to the database
mongoose.connect(process.env.MONGO);

// acquire the connection(to check it is successfully connected or not)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to db'));

//disconnected
db.on('disconnected', () => {
    console.log('Successfully Disconnected To Database');
});


// up and running then print the message
db.once('open', () => {
    console.log('Successfully Connected To Database');
});

module.exports = db;


