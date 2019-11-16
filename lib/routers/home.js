"use strict"

const express = require("express")

const pkg = require("../../package.json")

let router = express.Router()

router.route("/")
  .get((req, res) => {
    res.render("index", {
      title: pkg.title,
    })
  })

module.exports = router
