const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const require_dir = require('require-dir')

// start
const app = express()
app.use(express.json())
app.use(cors())

// mongo db
mongoose.connect("mongodb://localhost:27017/estp", 
    { useNewUrlParser: true }, 
    { useUnifiedTopology: true },
) //mongo warning
require_dir('./src/models')

// routes
app.use('/', require('./src/routes'))


app.listen(3001) // porta 3001
