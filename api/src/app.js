const express = require('express')
const app = express()
const router = express.Router()
const booksApi = require('./api/book')

router.get('/', (req, res) => res.sendStatus(200))

router.use('/book', booksApi)

app.use(router)

module.exports = app