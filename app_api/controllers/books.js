const booksListByGenre = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};

const booksCreate = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};
const booksReadOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
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