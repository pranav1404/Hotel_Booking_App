const dotenv = require('dotenv');

const result = dotenv.config('./.env');

if(result.error){
    throw result.error;
}

module.exports = dotenv;