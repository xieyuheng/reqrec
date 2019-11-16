"use strict"

const path = require("path")

const express = require("express")

const pkg = require("../package.json")
const env = require("./env.js")

const app = express()

const { db_t } = require("./db.js")

app.set("db", new db_t())

require("./template-engine.js")(app)

app.use("/", require("./routers/home.js"))
app.use("/records", require("./routers/records.js"))

module.exports = app
