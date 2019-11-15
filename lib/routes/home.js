"use strict"

var pkg = require("../../package.json")

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("index", {
      title: pkg.title,
    })
  })
}
