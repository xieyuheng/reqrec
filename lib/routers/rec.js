"use strict"

const express = require("express")

const pkg = require("../../package.json")

let router = express.Router()

router.get("/:rec_id", (req, res) => {
  res.send(req.params)
  // res.send(req.params.rec_id)
})

module.exports = router
