"use strict"

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

module.exports = {
  map2obj,
  obj2map,
}
