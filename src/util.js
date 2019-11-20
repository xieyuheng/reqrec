'use strict'

const assert = require('assert')

/**
 * left close, right open integer interval.
 */
function* range(lo, hi) {
  let i = lo
  while (i < hi) {
    yield i
    i += 1
  }
}

function map2obj(map) {
  let obj = {}
  for (let [k, v] of map.entries()) {
    obj[k] = v
  }
  return obj
}

function obj2map(obj) {
  let map = new Map()
  for (let k in obj) {
    map.set(k, obj[k])
  }
  return map
}

function array2map(array) {
  let map = new Map()
  let len = array.length / 2
  assert(len = Math.floor(len))
  for (let i of range(0, len)) {
    map.set(array[i], array[i+1])
  }
  return map
}

function array2obj(array) {
  return map2obj(array2map(array))
}

module.exports = {
  range,
  map2obj,
  obj2map,
  array2map,
  array2obj,
}
