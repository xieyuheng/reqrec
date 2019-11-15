"use strict"

const path = require("path")
const mustache_express = require("mustache-express")

module.exports = (app) => {
  app.engine("html", mustache_express())

  app.set("view engine", "html")
  app.set("views", path.join(__dirname, "..", "views"))
}
