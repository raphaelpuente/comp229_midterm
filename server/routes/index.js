// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: 'books'
   });
});


/* This wasn't part of the assignment but needed to be fixed, in order to get the book page working */

/* GET books page. wildcard */
router.get('/books', (req, res, next) => {
  res.render('books/index', {
    title: 'books',
    books: 'books'
   });
});


/* GET add page. wildcard */
router.get('/add', (req, res, next) => {
  res.render('books/add', {
    title: 'Add',
    books: 'books'
   });
});


/* GET edit page. wildcard */
router.get('/edit', (req, res, next) => {
  res.render('books/edit', {
    title: 'Edit',
    books: 'books'
   });
});

module.exports = router;
