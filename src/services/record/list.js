const util = require('@cicadoidea/basic/lib/util')
const { service_t } = require('../../service.js')

const rrdb = require('../../rrdb')

class record_list_t extends service_t {
  async validate(the) {
    return the
  }

  async execute(the) {
    let record_map = rrdb.record_get(the.record_id)

    return record_map
      ? util.map2obj(record_map)
      : undefined
  }
}

module.exports = {
  record_list_t
}
