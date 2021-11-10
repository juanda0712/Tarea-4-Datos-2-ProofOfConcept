const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScheme = new Schema(
    {
        name:{
            type: String
        },
        last_name:{
            type: String
        },
        code:{
            type: Number
        }
    });

const User = mongoose.model('users', UserScheme);

module.exports = User;