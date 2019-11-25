const { service_t } = require('../../service')

const rrdb = require('../../rrdb')

class record_capture_t extends service_t {
  async validate(the) {
    return the
  }

  async execute(the) {
    let record_map = rrdb.record_get(the.record_id)

    if (record_map) {
      let request_id = rrdb.request_create(the.record_id, the.request_value)
      return {
        request_id: request_id,
      }
    } else {
      return {
        msg: `can not find record_id: ${record_id}`,
      }
    }
  }
}

module.exports = {
  record_capture_t
}
