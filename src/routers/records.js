'use strict'

const Router = require('express-promise-router')
const basic = require('@cicadoidea/basic/lib/util')

const pkg = require('../../package.json')

let router = new Router()

router.route('/:record_id').all((req, res) => {
  let record_id = req.params['record_id']
  let rrdb = req.app.get('rrdb')
  let record_map = rrdb.record_get(record_id)
  if (record_map) {
    let request_value = {
      method: req.method,
      path: req.path,
      ip: req.ip,
      headers: basic.array2obj(req.rawHeaders),
      query: req.query,
      body: req.body,
    }
    let request_id = rrdb.request_create(record_id, request_value)
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

router.route('/:record_id/raw').get((req, res) => {
  let record_id = req.params['record_id']
  let rrdb = req.app.get('rrdb')
  let record_map = rrdb.record_get(record_id)
  if (record_map) {
    console.log(`show record_id: ${record_id}`)
    res.set('Content-Type', 'text/html')
    let json = JSON.stringify(basic.map2obj(record_map), null, 2)
    res.send(`<pre>${json}</pre>`)
  } else {
    res.status(400)
    res.json({
      msg: `can not find record_id: ${record_id}`,
    })
  }
})

module.exports = router
