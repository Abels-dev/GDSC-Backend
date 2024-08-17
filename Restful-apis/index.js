const express = require("express");
const mongoose = require("mongoose");
const Book = require("../libraryDb/schema");
const app = express();

mongoose.connect("mongodb://localhost:27017/libraryDB");

mongoose.connection.on("connected", () => {
   console.log("connected here");
});
app.use(express.json());

app.get("/api/books", (req, res) => {
   Book.find()
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
});

app.post("/api/books", (req, res) => {
   if (req.body.title && req.body.author) {
      Book.create({
         title: req.body.title,
         author: req.body.author,
         publishedYear: req.body.publishedYear,
      })
         .then((data) => res.status(201).send(data))
         .catch((err) => console.log(err));
   } else res.status(400).send("Title and author are required");
});
app.put("/api/books/:id", (req, res) => {
   const id = req.params.id;
   if (req.body.title && req.body.author) {
      const updatedBook = { ...req.body };
      Book.findByIdAndUpdate(id, updatedBook, { new: true })
         .then((data) => res.send(data))
         .catch((err) => res.status(404).send("Book not found"));
   } else res.status(400).send("title and author are required");
});
app.delete("/api/books/:id", (req, res) => {
   const id = req.params.id;
   Book.findByIdAndDelete(id)
      .then((data) => res.status(204).send())
      .catch((err) => res.status(404).send("Book not found"));
});

app.listen(3000);
