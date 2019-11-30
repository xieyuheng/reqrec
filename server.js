"use strict"

const http = require("http")

const ms = require("ms")

const env = require("./lib/env.js")
const app = require("./lib/app.js")

// setInterval(() => {
//   db.cleanUp()
// }, ms("1 min"))

const server = http.createServer()
server.on("request", app)

server.listen(env.port, () => {
  console.log("Listening on port %s", env.port)
})
