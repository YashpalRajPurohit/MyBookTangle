const doAddReview = (req, res, book) => {
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    const { author, rating, reviewText } = req.body;

    // Validate input data
    if (!author || !rating || !reviewText) {
        return res.status(400).json({ message: 'All fields (author, rating, reviewText) are required' });
    }

    const newReview = {
        author,
        rating,
        reviewText,
    };

    book.reviews.push(newReview);

    book.save()
        .then((savedBook) => {
            updateAverageRating(savedBook._id);
            const thisReview = savedBook.reviews[savedBook.reviews.length - 1];
            res.status(201).json(thisReview);
        })
        .catch((err) => {
            console.error(err); // Log the error for debugging
            res.status(500).json({ error: 'An error occurred while saving the review' });
        });
};


const reviewsCreate = (req, res) => {
    const bookId = req.params.bookid;

    if (!bookId) {
        return res.status(404).json({ message: 'Book not found' });
    }

    Book.findById(bookId)
        .select('reviews')
        .exec()
        .then((book) => {
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }

            doAddReview(req, res, book);
        })
        .catch((err) => {
            console.error(err); // Log the error for debugging
            res.status(500).json({ error: 'An error occurred while fetching the book' });
        });
};

const reviewsReadOne = (req, res) => {
    Book
        .findById(req.params.bookid)
        .select('name reviews')
        .exec((err, book) => {
            if (!book) {
                return res
                    .status(404)
                    .json({
                        "message": "location not found"
                    });
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            if (book.reviews && book.reviews.length > 0) {
                const review = book.reviews.id(req.params.reviewid);
                if (!review) {
                    return res
                        .status(400)
                        .json({
                            "message": "review not found"
                        });
                } else {
                    response = {
                        book: {
                            name: book.name,
                            id: req.params.bookid
                        },
                        review
                    };
                    return res
                        .status(200)
                        .json(response);
                }
            } else {
                return res
                    .status(404)
                    .json({
                        "message": "No reviews found"
                    });
            }
        }
        );
};
const reviewsUpdateOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};
const reviewsDeleteOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};
module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};