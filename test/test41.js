// Array.prototype._map = function(fn) {
//   const len = this.length
//   if (len === 0) return []

//   const result = []
//   let i = 0

//   for (i; i < len; i++) {
//     result.push(fn(this[i], i, this))
//   }

//   return result
// }

function jieliu(fn, delay) {
  let pre = Date.now()

  return function(...args) {
    const _this = this
    const now = Date.now()

    if (now - pre < delay) return 

    setTimeout(() => {
      fn.call(_this, ...args)
      pre = Date.now()
    }, delay)
  }
}

function fangdou(fn, delay) {
  let timer

  return function(...args) {
    const _this = this
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.call(_this, ...args)
    }, delay)
  }
}