// this sets up the model for the request

const mongoose = require('mongoose')

// create a schema
const quoteSchema = new mongoose.Schema({
    content: String,
    author: String
});


module.exports = mongoose.model('Quote', quoteSchema)