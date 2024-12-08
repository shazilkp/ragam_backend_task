const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },

    title:{
        type: String,
        required: true
    },

    author:{
        type: String,
        required: true
    },

    published_year:{
        type: Number,
        required: true
    },

    genre:{
        type: String,
        required: true
    },

    available_copies:{
        type: Number,
        required: true,
        default: 1
    }



})

module.exports = mongoose.model('Book', bookSchema)