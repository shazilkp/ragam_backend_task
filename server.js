
const DATABASE_URL = "mongodb://localhost/books"
const JWT_SECRET= "your_jwt_secret"

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(DATABASE_URL)
const db = mongoose.connection

db.on('error',(error) => console.error(error))
db.once('open',() => console.log("connected to db"))

app.use(express.json())

const booksRouter = require('./routes/books')
const authRouter = require('./routes/users')
app.use('/books',booksRouter)
app.use('/users', authRouter)


app.listen(3000, () => console.log('Server is on baby!!'))
