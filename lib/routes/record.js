"use strict"

var pkg = require("../../package.json")

module.exports = (app) => {
  app.get("/records/:record_id", (req, res) => {
    res.send(req.params.record_id)
  })
}
