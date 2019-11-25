'use strict'

const Router = require('express-promise-router')

const { record_create_t } = require('../../services/record/create')
const { record_list_t } = require('../../services/record/list')
const { record_delete_t } = require('../../services/record/delete')

let router = new Router()

router.route('/').post(async (req, res) => {
  let service = new record_create_t()
  let { data } = await service.run()

  console.log(`create record_id: ${data.record_id}`)
  res.status(201)
  res.json({
    record_id: data.record_id,
  })
})


router.route('/:record_id').delete(async (req, res) => {
  let record_id = req.params['record_id']

  let service = new record_delete_t()
  await service.run({ record_id })

  console.log(`delete record_id: ${record_id}`)
  res.json({ msg: 'record deleted' })
})

router.route('/:record_id/requests').get(async (req, res) => {
  let record_id = req.params['record_id']

  let service = new record_list_t()
  let { data, msg } = await service.run({ record_id })

  if (data) {
    console.log(`show record_id: ${record_id}`)
    res.json(data.record_map)
  } else {
    res.status(400)
    res.json({ msg })
  }
})

// router.route('/').post((req, res) => )
// router.route('/:record_id').delete((req, res) => )
// router.route('/:record_id/requests').get((req, res) => )

module.exports = router
