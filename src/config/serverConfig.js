const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    salt:  bcrypt.genSaltSync(10),
    PRIVATEJWT:process.env.PRIVATEJWT,
}