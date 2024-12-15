const Book = require("../model/BookModel");

const GetBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({
      success: true,
      message: "Book get sucessfully",
      book,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      success: false,
      message: "Error in Get Controller",
      error,
    });
  }
};

module.exports = { GetBook };
