'use strict'

const Router = require('express-promise-router')
const util = require('@cicadoidea/basic/lib/util')

const { record_list_t } = require('../services/record/list.js')
const { record_capture_t } = require('../services/record/capture.js')

let router = new Router()

router.route('/:record_id').all(async (req, res) => {
  let record_id = req.params['record_id']

  let service = new record_capture_t()
  let data = await service.run({
    record_id,
    request_value: {
      method: req.method,
      path: req.path,
      ip: req.ip,
      headers: util.array2obj(req.rawHeaders),
      query: req.query,
      body: req.body,
    }
  })

  if (data.request_id) {
    console.log(`create request_id: ${data.request_id}`)
    res.json({
      request_id: data.request_id,
    })
  } else {
    res.status(400)
    res.json({
      msg: data.msg,
    })
  }
})

router.route('/:record_id/raw').get(async (req, res) => {
  let record_id = req.params['record_id']

  let service = new record_list_t()
  let record_map = await service.run({ record_id })

  if (record_map) {
    console.log(`show record_id: ${record_id}`)
    res.set('Content-Type', 'text/html')
    let json = JSON.stringify(record_map, null, 2)
    res.send(`<pre>${json}</pre>`)
  } else {
    res.status(400)
    res.json({
      msg: `can not find record_id: ${record_id}`,
    })
  }
})

module.exports = router
