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
    name: String,
    rating: Number,
    genres: [String],
    authors: [String],
    image: String,
    reviews: [reviewSchema]
});

mongoose.model('Book', bookSchema);