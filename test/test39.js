Array.prototype._reduce = function (fn, pre) {
  let result = pre
  let i = 0

  if (pre === undefined) {
    result = this[0]
    i = 1
  }

  for (i; i< this.length; i++) {
    result = fn(result, this[i], i, this)
  }

  return result
}

function fn(result, currentValue, index){
  return result + currentValue
}

var arr = [2,3,4,5]
var b = arr._reduce(fn,10) 
var c = arr._reduce(fn)
console.log(b)
console.log(c)