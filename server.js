"use strict"

const http = require("http")

const ms = require("ms")

const env = require("./src/env.js")
// const db = require("./src/db.js")
const app = require("./src/app.js")

// setInterval(() => {
//   db.cleanUp()
// }, ms("1 min"))

const server = http.createServer()
server.on("request", app)

server.listen(env.port, () => {
  console.log("Listening on port %s", env.port)
})
