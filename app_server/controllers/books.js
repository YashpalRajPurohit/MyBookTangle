/* GET 'home' page */
const homelist = (req, res) => {
    res.render('books-list',
        {
            title: 'Home',
            pageHeader: {
                title: 'Book Tangle',
                strapline: 'Discover, Read, and Explore Your Next Adventure Here!'
            },
            books: [
                {
                    name: 'Ikigai',
                    rating: 4,
                    genres: ['Self-help'],
                    authors: ['Hector Garcia', 'Francesc Miralles'],
                    image: '/images/ikigai_book1.jpg'
                },
                {
                    name: 'The Book Of Five Rings',
                    rating: 4,
                    genres: ['philosophy', 'strategy'],
                    authors: ['Miyamoto Musashi'],
                    image: '/images/the-book-of-five-rings_book2.jpg'
                },
                {
                    name: 'Deacon King Kong',
                    rating: 4,
                    genres: ['Fiction'],
                    authors: ['James McBride'],
                    image: '/images/dconkong_book3.jpeg'
                }]
        });
};
/* GET 'Location info' page */
const BookInfo = (req, res) => {
    res.render('book-info', { title: 'Book info' });
};
/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('book-review-form',
        {
            title: 'Review Ikigai on BookTangle',
            pageHeader: { title: 'Review Ikigai' }
        }
    );
};


module.exports = {
    homelist,
    BookInfo,
    addReview
};