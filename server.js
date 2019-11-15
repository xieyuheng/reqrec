"use strict"

const http = require("http")

const ms = require("ms")

const env = require("./lib/env.js")
// const db = require("./lib/db.js")
const app = require("./lib/app.js")

// setInterval(() => {
//   db.cleanUp()
// }, ms("1 min"))

const server = http.createServer()
server.on("request", app)

class subst_t {
  constructor() {
    this.map = new Map;
  }
}

let st = new subst_t()

console.log(st)

server.listen(env.port, () => {
  console.log("Listening on port %s", env.port)
})
