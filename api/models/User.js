const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const FavoriteSchema = new Schema({
    // products {
    //     name
    // }
    fmid: {
        type: Number,
        required: true
    },
    marketname: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    seasonDates: {
        type: String
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    products: [ProductSchema]

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