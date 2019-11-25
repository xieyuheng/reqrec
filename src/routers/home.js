'use strict'

const Router = require('express-promise-router')

const env = require('../env')

const { record_create_t } = require('../services/record/create')

let router = new Router()

router.route('/').get(async (req, res) => {
  let service = new record_create_t()
  let { data } = await service.run()

  console.log(`create record_id: ${data.record_id}`)
  let self_url = `${req.protocol}://${req.hostname}:${env.port}`
  res.render('index', {
    self_url,
    pkg: env.pkg,
    record_id: data.record_id,
  })
})

module.exports = router
