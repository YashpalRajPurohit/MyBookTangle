const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./app_api/models/db');

const indexRouter = require('./app_server/routes/index');
var apiRouter = require('./app_api/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

const { books } = require('./app_server/controllers/books'); // Import the books array

// Define a route for searching books
app.get('/search', (req, res) => {
  const searchQuery = req.query.searchQuery.toLowerCase();
  const filteredBooks = books.filter(book => book.name.toLowerCase().includes(searchQuery));
  res.render('books-list', { books: filteredBooks, pageHeader: { title: 'Search Results', strapline: `Results for: ${searchQuery}` } });
});

// Define a route for filtering books by genre
app.get('/genre/:genre', (req, res) => {
  const selectedGenre = req.params.genre;
  const filteredBooks = books.filter(book => book.genres.includes(selectedGenre));
  res.render('books-list', { books: filteredBooks, pageHeader: { title: `${selectedGenre}`, strapline: `Books in Genre:` } });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;