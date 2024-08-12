const mongoose = require("mongoose");
const Book = require("./schema");

mongoose.connect("mongodb://localhost:27017/libraryDB");

mongoose.connection.on("connected", () => {
   console.log("connected here");
});

const addBook = (bookDetails) => {
   const newBook = new Book(bookDetails);
   newBook
      .save()
      .then((book) => console.log(book))
      .catch((err) => console.log(err));
};
const updateAvailableCopies = (title, newCopiesValue) => {
   Book.findOneAndUpdate(title, { availableCopies: newCopiesValue })
      .then((book) => console.log(book))
      .catch((err) => console.log(err));
};
const findBookByAuthor = (author) => {
   Book.find({ author: author })
      .then((book) => console.log(book))
      .catch((err) => console.log(err));
};
const deleteBook = (title) => {
   Book.deleteOne({ title: title })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
};

/* addBook({
   title: "yotor",
   author: "yesmake worku",
   publishedYear: 2000,
   availableCopies: 50,
}); */

//updateAvailableCopies({ title: "harry Potter" }, 4);

//findBookByAuthor("yesmake worku")

// deleteBook("yotor");