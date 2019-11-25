const { service_t } = require('../../service')

const rrdb = require('../../rrdb')

class record_create_t extends service_t {
  async validate(the) {
    return the
  }

  async execute(the) {
    let record_id = rrdb.record_create()

    return {
      record_id: record_id,
    }
  }
}

module.exports = {
  record_create_t
}
