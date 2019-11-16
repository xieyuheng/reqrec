"use strict"

const express = require("express")

const pkg = require("../../package.json")
const util = require("../util.js")

let router = express.Router()

router.route("/:record_id")
  .get((req, res) => {
    let record_id = req.params["record_id"]
    let db = req.app.get("db")
    let record_map = db.record_get(record_id)
    if (record_map) {
      console.log(`show record_id: ${record_id}`)
      res.set("Content-Type", "text/html")
      let json = JSON.stringify(util.map2obj(record_map), null, 2)
      res.send(`<pre>${json}</pre>`)
    } else {
      res.status(400)
      res.json({
        msg: `can not find record_id: ${record_id}`,
      })
    }
  })

module.exports = router
