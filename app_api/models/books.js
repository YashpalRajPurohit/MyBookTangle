const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.now
    }
});

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min: 1,
        max: 5
    },
    genres: [String],
    authors: [String],
    image: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
});

mongoose.model('Book', bookSchema, 'books');