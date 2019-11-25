const { service_t } = require('../../service.js')

const rrdb = require('../../rrdb')

class record_delete_t extends service_t {
  async validate(the) {
    return the
  }

  async execute(the) {
    rrdb.record_delete(the.record_id)
  }
}

module.exports = {
  record_delete_t
}
