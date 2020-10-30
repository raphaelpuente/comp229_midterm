let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Book = require('../models/books')

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList)=>{
      if(err)
      {
        return console.error(err);
      }
      else
      {
          console.log(books)
          res.render('books/index', {title: 'Books', books: bookList});
      }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('books/add', {title: 'Add'});
};

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
      "Title": req.body.Title,
      "Description": req.body.Description,
      "Price": req.body.Price,
      "Author": req.body.Author,
      "Genre": req.body.Genre
    });
  
    Book.create(newBook, (err, Book) =>{
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect('/books')
      }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
  
    Book.findById(id, (err, bookToEdit) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.render('books/edit', {title: 'Edit', book: bookToEdit})
      }
    });
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedBook = Book({
      "_id": id,
      "Title": req.body.Title,
      "Description": req.body.Description,
      "Price": req.body.Price,
      "Author": req.body.Author,
      "Genre": req.body.Genre
    });
  
    Book.updateOne({_id: id}, updatedBook, (err) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect('/books')
      }
    }) 
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
  
    Book.remove({_id: id}, (err) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect('/books')
      }
    })
};