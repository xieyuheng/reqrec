'use strict'

const express = require('express')
const mustache_express = require('mustache-express')
const body_parser = require('body-parser')

const env = require('./env')

const app = express()

app.engine('html', mustache_express())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(body_parser.json())

app.use('/', require('./routers/home'))
app.use('/records', require('./routers/records'))
app.use('/api/records', require('./routers/api/records'))

module.exports = app
