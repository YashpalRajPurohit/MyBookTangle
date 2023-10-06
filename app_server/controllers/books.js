const genres = [
    'Self-help',
    'philosophy',
    'Fiction',
    'Friendship',
    'Romance',
    'Mystery',
    'Magic',
    'Crime',
    'Thriller',
    'Horror',
    'Fantasy',
    'Sci-fi',
];

const books = [
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
        genres: ['Philosophy', 'strategy'],
        authors: ['Miyamoto Musashi'],
        image: '/images/the-book-of-five-rings_book2.jpg'
    },
    {
        name: 'Deacon King Kong',
        rating: 4,
        genres: ['Fiction'],
        authors: ['James McBride'],
        image: '/images/dconkong_book3.jpeg'
    },
    {
        name: 'Butterfly Dreams',
        rating: 4,
        genres: ['Friendship', 'Romance', 'Mystery', 'Magic'],
        authors: ['Anne McClard'],
        image: '/images/ButterflyDreams.jpg'
    },
    {
        name: 'The Fraud',
        rating: 4,
        genres: ['Fiction', 'Mystery'],
        authors: ['Zadie Smith'],
        image: '/images/TheFraud.jpg'
    },
    {
        name: 'Gone Girl',
        rating: 4,
        genres: ['Crime', 'Thriller'],
        authors: ['Gillian Flynn'],
        image: '/images/GoneGirl.jpg'
    },
    {
        name: 'The Notebook',
        rating: 4,
        genres: ['Romance'],
        authors: ['Nicholas Spark'],
        image: '/images/TheNotebook.jpg'
    },
    {
        name: "The Time Traveler's Wife",
        rating: 4,
        genres: ['Romance', 'Sci-fi'],
        authors: ['Audrey Niffenegger'],
        image: '/images/TTWife.jpg'
    },
    {
        name: 'Frankenstein',
        rating: 4,
        genres: ['Horror'],
        authors: ['Mary Shelly'],
        image: '/images/Frankenstein.jpg'
    },
    {
        name: 'The Last Unicorn',
        rating: 4,
        genres: ['Fantasy'],
        authors: ['Peter S Beagle'],
        image: '/images/TheLastUnicorn.jpg'
    },
    {
        name: 'The Name of the Wind',
        rating: 4,
        genres: ['Fantasy'],
        authors: ['Patrick Rothfuss'],
        image: '/images/TheNameoftheWind.jpg'
    },
    {
        name: 'Killing Floor',
        rating: 4,
        genres: ['Mystery', 'Thriller'],
        authors: ['Lee Child'],
        image: '/images/KillingFloor.jpg'
    }];

const pageHeader = {
    title: 'Book Tangle',
    strapline: 'Discover, Read, and Explore Your Next Adventure Here!',
};

const renderPage = (req, res, page, title) => {
    res.render(page, {
        title,
        pageHeader,
        books: books, // Use the books data here
        genres: genres,
    });
};

const homelist = (req, res) => {
    renderPage(req, res, 'books-list');
};

const BookInfo = (req, res) => {
    renderPage(req, res, 'book-info', 'Book Info');
};

const addReview = (req, res) => {
    res.render('book-review-form', {
        title: 'Review Ikigai on BookTangle',
        pageHeader: { title: 'Review Ikigai' },
    });
};



module.exports = {
    homelist,
    BookInfo,
    addReview,
    books,
    genres,
};