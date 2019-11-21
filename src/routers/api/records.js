'use strict'

const Router = require('express-promise-router')

const pkg = require('../../../package.json')
const util = require('../../util.js')

let router = new Router()

router.route('/')
  .post((req, res) => {
    let rrdb = req.app.get('rrdb')
    let record_id = rrdb.record_create()
    console.log(`create record_id: ${record_id}`)
    res.status(201)
    res.json({
      record_id: record_id,
    })
  })


router.route('/:record_id')
  .delete((req, res) => {
    let record_id = req.params['record_id']
    let rrdb = req.app.get('rrdb')
    rrdb.record_delete(record_id)
    console.log(`delete record_id: ${record_id}`)
    res.json({ msg: 'record deleted' })
  })

router.route('/:record_id/requests')
  .get((req, res) => {
    let record_id = req.params['record_id']
    let rrdb = req.app.get('rrdb')
    let record_map = rrdb.record_get(record_id)
    if (record_map) {
      console.log(`show record_id: ${record_id}`)
      res.json(util.map2obj(record_map))
    } else {
      res.status(400)
      res.json({ msg: `can not find record_id: ${record_id}` })
    }
  })

module.exports = router
