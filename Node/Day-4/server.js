const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = 3000;

const DB_URL = "mongodb://localhost:27017/test"; // Use 'localhost' instead of '0.0.0.0'

app.use(bodyParser.json());

// Define schema

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishdate: String,
});

const Book = mongoose.model("Book", bookSchema);

// Connect to MongoDB
mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB", err));

app.post('/book', async (req, res) => {
    const book = new Book(req.body);
    try {
        const savedBook = await book.save();
        res.status(201).send(savedBook);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.get("/", (req, res) => {
    res.send("Hi, Hello Welcome all!!!");
});

app.listen(PORT, () => {
    console.log("The Server is running on Port:", PORT);
});
