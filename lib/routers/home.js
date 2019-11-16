"use strict"

const express = require("express")

const pkg = require("../../package.json")

let router = express.Router()

router.get("/", (req, res) => {
  console.log(req.rawHeaders)
  console.log(req.headers)
  console.log(req.query)
  res.render("index", {
    title: pkg.title,
  })
})

module.exports = router
