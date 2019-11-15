"use strict"

var pkg = require("../../package.json")

module.exports = (app) => {
  app.get("/rec/:rec_id", (req, res) => {
    res.send(req.params.rec_id)
  })
}
