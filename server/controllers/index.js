let express = require('express');
let router = express.Router();


module.exports.displayHomePage = (req, res, next) => {
    res.render('content/index', {title: 'Home'});
}

module.exports.displayBooksPage = (req, res, next) => {
    res.render('books/index', { title: 'Books'});
}
