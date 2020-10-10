const mongoose = require('mongoose')

//Build a schema (defines what a post looks like:attributes, etc)
const UserSchema = mongoose.Schema({
    //title: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema)