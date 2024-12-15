const express = require("express")
const { GetBook } = require("../controller/BookController")
const router = express.Router()

router.get("/",GetBook)

module.exports=router