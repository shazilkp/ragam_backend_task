const express= require('express')
const router = express.Router()
const Book = require('../models/book')

//getting books
router.get('/',async (req,res) => {
    try{
        const books = await Book.find()
        res.json(books)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

//gettig 1 book
router.get('/:id',getBook,(req,res) => {
    res.json(res.book)
})

//creating 1
router.post('/',async (req,res) => {
    const book = new Book({
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        published_year: req.body.published_year,
        genre: req.body.genre,
        available_copies: req.body.available_copies
    })

    try {
        const newBook = await book.save()
        res.status(201).json(newBook)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//updatinggg
router.put('/:id',getBook, async (req,res) => {
    try {
        await res.book.updateOne(req.body)
        res.json({message: 'Book updated'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//deleting 1
router.delete('/:id',getBook, async (req,res) => {
    try {
        await res.book.deleteOne()
        res.json({message: 'Deleted book'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getBook(req,res,next){
    try {
        const id = req.params.id
        console.log(id);
        book =  await Book.findOne({id})
        if(book == null){
            return res.status(404).json({message: 'Cant find book'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.book = book
    next()
}

module.exports = router