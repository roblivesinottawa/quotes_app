const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// create express app
const app = express()
const PORT = 3000

// connect to database
mongoose.connect('mongodb://localhost/motivation', {
    useNewUrlParser: true ,
    useUnifiedTopology: true }) //add those to eliminate the deprecation errors

const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB database...'))

// middleware
app.use(bodyParser.json())

// define routes
app.get('/', (req, res) => {
    res.send("Hello World")
})

const quotesRoute = require('./routes/Quotes')
app.use('/quotes', quotesRoute)


app.listen(PORT, () => console.log(`Listening at port ${PORT}`)) //starting server

