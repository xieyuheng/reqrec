"use strict"

const path = require("path")

const express = require("express")

const pkg = require("../package.json")
const env = require("./env.js")

const app = express()

require("./template-engine.js")(app)

app.use("/", require("./routers/home.js"))
app.use("/rec", require("./routers/rec.js"))

module.exports = app
