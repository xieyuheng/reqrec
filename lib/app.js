"use strict"

const path = require("path")

const express = require("express")

const pkg = require("../package.json")
const env = require("./env.js")

const app = express()

require("./template-engine.js")(app)
require("./routes/home.js")(app)

module.exports = app
