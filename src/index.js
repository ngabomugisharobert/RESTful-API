const express = require('express');

const app = express()

let personRoute = require('./routes/person')

app.use(personRoute)
app.use(express.static('public'))

const port = process.env.PORT || 4000

app.listen(port, () => console.info(`Server has started on ${port}`))