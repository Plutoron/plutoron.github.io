Object.prototype._map = function(fn) {
  let obj = {...this}
  let result = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = fn(obj[key], key, obj)
    }
  }

  return result
}

var o = { a: 1, b: 2 }
const res = o._map((value, key, source) => {
  return 1
})

console.log(res)