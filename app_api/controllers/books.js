const mongoose = require('mongoose');
const Book = mongoose.model('Book');


const booksListByGenre = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};

const booksCreate = (req, res) => {
    const { name, genres } = req.body;

    if (!name || !genres) {
        return res.status(400).json({ error: 'Name and genres are required' });
    }

    const genreArray = genres.split(',').map((genre) => genre.trim());

    Book.create({
        name,
        genres: genreArray,
    })
        .then((book) => {
            res.status(201).json(book);
        })
        .catch((err) => {
            console.error(err); // Log the error for debugging
            res.status(500).json({ error: 'An error occurred while creating the book' });
        });
};

const booksReadOne = (req, res, next) => {
    Book.findById(req.params.bookid)
        .then((book) => {
            if (!book) {
                const notFoundError = new Error('Book not found');
                notFoundError.status = 404;
                return next(notFoundError);
            }
            res.status(200).json(book);
        })
        .catch((err) => {
            return next(err); // Forward the error to the error handling middleware
        });
};
const booksUpdateOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};
const booksDeleteOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};
module.exports = {
    booksListByGenre,
    booksCreate,
    booksReadOne,
    booksUpdateOne,
    booksDeleteOne
};
