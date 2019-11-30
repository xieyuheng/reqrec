const util = require('@cicadoidea/basic/lib/util')
const { service_t } = require('../../service')

const rrdb = require('../../rrdb')

class record_list_t extends service_t {
  async validate(the) {
    return the
  }

  async execute(the) {
    let record_map = rrdb.record_get(the.record_id)

    if (record_map) {
      return {
        data: {
          record_map: util.map2obj(record_map)
        }
      }
    } else {
      return {
        msg: `can not find record_id: ${the.record_id}`
      }
    }
  }
}

module.exports = {
  record_list_t
}
