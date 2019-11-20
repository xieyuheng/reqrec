'use strict'

const express = require('express')

const pkg = require('../../package.json')
const util = require('../util.js')

let router = express.Router()

router.route('/:record_id')
  .all((req, res) => {
    let record_id = req.params['record_id']
    let db = req.app.get('db')
    let record_map = db.record_get(record_id)
    if (record_map) {
      let request_value = {
        method: req.method,
        path: req.path,
        ip: req.ip,
        headers: util.array2obj(req.rawHeaders),
        query: req.query,
        body: req.body,
      }
      let request_id = db.request_create(record_id, request_value)
      console.log(`create request_id: ${request_id}`)
      res.json({
        request_id: request_id,
      })
    } else {
      res.status(400)
      res.json({
        msg: `can not find record_id: ${record_id}`,
      })
    }
  })

router.route('/:record_id/raw')
  .get((req, res) => {
    let record_id = req.params['record_id']
    let db = req.app.get('db')
    let record_map = db.record_get(record_id)
    if (record_map) {
      console.log(`show record_id: ${record_id}`)
      res.set('Content-Type', 'text/html')
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
