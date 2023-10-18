const express = require('express');
const router = express.Router();
const ctrlBooks = require('../controllers/books');
const ctrlOthers = require('../controllers/others');

/*pages */
router.get('/', ctrlBooks.homelist);
router.get('/Book', ctrlBooks.BookInfo);
router.get('/Book/review/new', ctrlBooks.addReview);

router.get('/genre/:genre', ctrlBooks.byGenre);
router.get('/search', ctrlBooks.bySearch);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/contactus', ctrlOthers.ContactUs);


module.exports = router;
