"use strict"

const nanoid = require("nanoid")

class db_t {

  constructor() {
    this.record_map = new Map()
  }

  // record

  record_create() {
    let record_id = nanoid()
    this.record_map.set(record_id, new Map())
    return record_id
  }

  record_get(record_id) {
    return this.record_map.get(record_id)
  }

  record_delete(record_id) {
    this.record_map.delete(record_id)
  }

  // request

  request_create(record_id, request_value) {
    let request_id = nanoid()
    let request_map = this.record_get(record_id)
    request_map.set(request_id, request_value)
    return request_id
  }

  request_get(record_id, request_id) {
    return this.record_get(record_id).get(request_id)
  }

  request_delete(record_id, request_id) {
    this.record_get(record_id).delete(request_id)
  }

}

module.exports = {
  db_t
}
