const mongoose = require('mongoose');
const { Schema } = mongoose;

const FavoriteSchema = new Schema({
    //title: String,
    market_fmid: {
        type: String,
        required: true
    }

});

//Build a schema (defines what a post looks like:attributes, etc)
const UserSchema = new Schema({
    //title: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    favorites: [FavoriteSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;