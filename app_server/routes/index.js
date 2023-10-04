const express = require('express');
const router = express.Router();
const ctrlBooks = require('../controllers/books');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlBooks.homelist);
router.get('/Book', ctrlBooks.BookInfo);
router.get('/Book/review/new', ctrlBooks.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
